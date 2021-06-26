const ProxyHost = `https://be-beam.swiftshopbd.com/`


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
