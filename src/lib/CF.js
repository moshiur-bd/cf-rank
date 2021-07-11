const ProxyHost = `https://be-beam.swiftshopbd.com/`


const CF_API = "https://codeforces.com/api"
const CF_STANDING_URL = (id, unofficial, users) => `/contest.standings?showUnofficial=` + unofficial + `&contestId=` + id + `&handles=` + users
const CF_USER_INFO = (users) => `/user.info?handles=` + users
const CONTEST_FINISHED = "FINISHED"


export async function ParseCFUsersFromURL(url){
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

            // let vals = {}
            // for (var i = 0, n = sel.options.length; i < n; i++) { // looping over the options
            //     if (sel.options[i].value) vals.push(sel.options[i].value);
            // }

            
            var docAsStr = doc.innerHTML.replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll("</option>","ENDXXXEND\n");

            var found = [...docAsStr.matchAll(`<option.*value=\"(.*)\".*>(.+?)ENDXXXEND`)]

            debugger
            let resp = []
            for (const f of found) {
                let orgID = parseInt(f[1])
                if(isNaN(orgID)){
                    continue
                }
                resp.push({name:f[2], url:url+"/organization/" + orgID})
            }
            return resp
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
            return ""
        });
}



export async function FetchRanks(contestID, users, unofficial){
    var errored = false
    const url = CF_API + CF_STANDING_URL(contestID, unofficial, users)
    console.log("Fetching", url)
    const resp = await fetch(url).
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

export async function FetchUserInfo(users, unofficial) {
    var errored = false
    const url = CF_API + CF_USER_INFO(users)
    console.log("Fetching", url)
    const resp = await fetch(url).
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


export function GetContestStatusText(status) {
    if (status === CONTEST_FINISHED) {
        return "Final Standings"
    }

    if (status === "PENDING_SYSTEM_TEST") {
        return "Pending System Test"
    }

    if (status === "SYSTEM_TEST") {
        return "System Testing"
    }

    if (status === "CODING") {
        return "Contest is Running"
    }
}

export function GetHandleTitle(rating) {
    if (rating < 1200) {
        return "newbie"
    }

    if (rating < 1400) {
        return "pupil"
    }

    if (rating < 1600) {
        return "specialist"
    }

    if (rating < 1900) {
        return "expert"
    }
}

