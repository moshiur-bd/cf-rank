

export function UrlInfo(props){
    return {
        url: props.location.search.match(`url=(.+)`)[1],
        contestID: props.match.params.contestID
    }
}


export function SameUrl(prop1, prop2){
    debugger
    var p1 = UrlInfo(prop1)
    var p2 = UrlInfo(prop2)
    if (p1 !== null && p2 !== null && p1.url === p2.url && p1.contestID === p2.contestID) {
        return true
    }
    return false
}