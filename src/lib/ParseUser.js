//const HOST = `https://codeforces.com/ratings/country/Bangladesh`
const HOST = `http://localhost:8080/https://codeforces.com/ratings/organization/3403`
//const HOST = `https://google.com`
//const HOST = `https://codeforces.com/api/contest.standings?contestId=1535`


export default function ParseCFUsersFromURL(){
    let resp = ""
    fetch(HOST, {
        "X-Requested-With": "cf"
    })
        .then((response) => {
            return response.text()
            //debugger
        }).then(function (html) {
            // Initialize the DOM parser
            var parser = new DOMParser();

            // Parse the text
            var doc = parser.parseFromString(html, "text/html").querySelector("#pageContent > div.datatable.ratingsDatatable")

            // You can now even select part of that html as you would in the regular DOM 
            // Example:
            // var docArticle = doc.querySelector('article').innerHTML;

            console.log(doc);
            var docAsStr = doc.innerHTML

            var found = [...docAsStr.matchAll(`/profile/(.+?)\"`)]

            var resp = ""
            for(const f of found){
                resp = resp.concat(f[1] + ";")
            }
            console.log("found ", found)
            console.log("resp ", resp)

            return resp
        })
        .catch(function (err) {
            console.log('Failed to fetch page: ', err);
        });

}

// export default function DoSomething(){
//     parseNah()
// }

//  async function parseNah(){
//     var errored = false
//     const url = HOST
//     const resp = await fetch(url,{
//         "X-Requested-With":"react"
//     }).
//         catch(err => {
//             console.log(err);
//             errored = true
//             return
//         });

//     if (errored) {
//         return
//     }

//     debugger

//     if (resp.status === 200) {
//         console.log("fuck", (await resp.text()).result)
//     } else {
//         const body = await resp.json()
//     }
// }