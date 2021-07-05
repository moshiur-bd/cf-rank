const ProxyHost = `https://be-beam.swiftshopbd.com/`


const CF_API = "https://codeforces.com/api"
const CF_STANDING_URL = (id, unofficial) => `/contest.standings?showUnofficial=` + unofficial + `&contestId=` + id + `&handles=`
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


export async function FetchRanks(contestID, users, unofficial){
    var errored = false
    const url = CF_API + CF_STANDING_URL(contestID, unofficial) + users
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
        return "Final Standing"
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
