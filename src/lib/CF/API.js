
import {UniqueParsedHandles} from '../Handles'
import {CF_API, CF_FE, CONTEST_FINISHED} from './Constants'

const ProxyHost = `http://localhost:8080/`

const CF_STANDING_URL = (id, unofficial, users) => `/contest.standings?showUnofficial=` + unofficial + `&contestId=` + id + `&handles=` + users
const CF_USER_INFO = (users) => `/user.info?handles=` + users



const MAX_ASYNC_HANDLE_PARSER_PER_URL = 20


async function parseCFUsersFromURL(url){
    return fetch(ProxyHost+url, {
        "X-Requested-With": "cf"
    })
    .then((response) => {
        return response.text()
    }).then(function (html) {
        var parser = new DOMParser();

        var doc = parser.parseFromString(html, "text/html").querySelector("#pageContent > div.datatable.ratingsDatatable")

        var docAsStr = doc.innerHTML

        var found = [...docAsStr.matchAll(`/profile/(.+?)\"`)]

        var resp = ""
        for(const f of found){
            resp = resp.concat(f[1] + ";")
        }
        return resp
    })
    .catch(function (err) {
        console.log('Failed to fetch page: ', err);
        return ""
    });
}

export async function ParseCFHandles(url, handleCount) {
    let handles = ""
    let pageID = 1

    let hcUnknown = (handleCount === undefined || handleCount <= 0)

    while (true) {
        let promises = []
        if(hcUnknown){
            handleCount = 1000 // make about 5 concurrent requests
        }
        for (let i = 1; handleCount > 0 && i <= MAX_ASYNC_HANDLE_PARSER_PER_URL; i++) {
            promises.push(parseCFUsersFromURL(url + "/page/" + pageID))
            pageID++
            handleCount -= 200
        }

        let pHandles = await Promise.all(promises)

        for (let i = 0; i < pHandles.length; i++) {
            var { unq, cnt, tot } = UniqueParsedHandles(pHandles[i], handles)
            if (cnt > 0) {
                handles += unq
            } else {
                break
            }
        }

        if (cnt <= 150) {
            break
        }
    }

    console.table({ log: "Parse handle result per url", url: url, total: tot, handles: handles })
    return {handles:handles}
}

export async function ParseCFOrgs() {
    let url = `https://codeforces.com/ratings`
    return fetch(ProxyHost + url, {
        "X-Requested-With": "cf"
    })
        .then((response) => {
            return response.text()
        }).then(function (html) {
            let parser = new DOMParser();

            let doc = parser.parseFromString(html, "text/html").querySelector("#locationSelect > label > select")
            
            var docAsStr = doc.innerHTML.replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll("</option>","ENDXXXEND\n");

            var found = [...docAsStr.matchAll(`<option.*value=\"(.*)\".*>(.+?)ENDXXXEND`)]

            let resp = []
            let skipFirst = true
            for (const f of found) {
                if(skipFirst){
                    skipFirst = false
                    continue
                }
                let NameAndCnt = f[2].trim()
                let orgID = f[1].trim()
                let nameEndsAt = NameAndCnt.lastIndexOf(',');
                let handleCount = parseInt(NameAndCnt.substr(nameEndsAt + 1))
                handleCount = isNaN(handleCount)? 0: handleCount
                debugger

                resp.push({ name: NameAndCnt.substr(0, nameEndsAt), id: orgID, hc:handleCount})
            }
            return resp
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
            return ""
        });
}

// rate limit to 4 calls every second
class Lock {
    constructor(counter) {
        this.counter = counter; // how many users can use the resource at one, set 1 for regular lock
    }

    now() {
        return Math.round(+new Date() / 1000)
    }
    async hold(cb) {
        while (true) {
            if (this.counter > 0) { // there is no one wating for the resource
                this.counter--; // update the resource is in usage
                return await cb();  // fire the requested callback
            }
            await sleep(200)
        }
    }

    release() {
        this.counter++;
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const RATE_LIMIT = 5
const MAX_RETRY = 50
let lock = new Lock(RATE_LIMIT)

async function RateLimitFetch(url){
    let retryCount = MAX_RETRY
    let resp
    while(retryCount > 0){
        resp = await lock.hold(async () => {
            let r = await fetch(url)
            lock.release()
            return r
        })

        if (resp.status == 200) {
            return resp
        }
        retryCount--
    }
    return resp
}

export async function FetchRanks(contestID, users, unofficial){
    var errored = false
    const url = CF_API + CF_STANDING_URL(contestID, unofficial, users)
    console.log("Fetching", url)
    const resp = await RateLimitFetch(url).
        catch(err => {
            console.log(err);
            errored = true
            return
        })

    if (errored || resp.status !== 200) {
        return undefined
    }
    return (await resp.json()).result
}

export async function FetchUserInfo(users) {
    var errored = false
    const url = CF_API + CF_USER_INFO(users)
    console.log("Fetching", url)
    const resp = await RateLimitFetch(url).
        catch(err => {
            console.log(err);
            errored = true
            return
        });

    if (errored || resp.status !== 200) {
        return undefined
    }
    return (await resp.json()).result
}

