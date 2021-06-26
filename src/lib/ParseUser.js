//const HOST = `https://codeforces.com/ratings/country/Bangladesh`
const ProxyHost = `http://192.168.18.13:8080/`
//const HOST = `https://google.com`
//const HOST = `https://codeforces.com/api/contest.standings?contestId=1535`


export default async function ParseCFUsersFromRank(url){
    return fetch(ProxyHost+url, {
        "X-Requested-With": "cf"
    })
    .then((response) => {
        return response.text()
        //debugger
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
    });
}
