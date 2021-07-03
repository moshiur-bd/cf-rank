

function getQueryVariable(search, variable) {
    var query = search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return ""
}

export function UrlInfo(props){
    let handles = getQueryVariable(props.location.search, "handles")
    if(handles.length > 0 && handles.slice(-1) != ";"){
        handles = handles + ";"
    }
    return {
        url: getQueryVariable(props.location.search, "url"),
        contestID: props.match.params.contestID,
        handles: handles
    }
}


export function SameUrl(prop1, prop2){
    var p1 = UrlInfo(prop1)
    var p2 = UrlInfo(prop2)
    if (p1 !== null && p2 !== null && p1.url === p2.url && p1.contestID === p2.contestID && p1.handles === p2.handles) {
        return true
    }
    return false
}

export function BuildUrl(to, contestID, url, handles){
    let nextPath = to
    if (nextPath.length > 0 && nextPath.slice(-1)!= "/")
    {
        nextPath = nextPath + "/"
    }
    if(!contestID) {
        contestID = 1541
    }
    nextPath = nextPath + contestID + "?"
    if(url !== ""){
        nextPath = nextPath + "url=" + url + "&"
    }
    if (handles !== "") {
        nextPath =  nextPath + "handles=" + handles + "&"
    }

    if (nextPath.length > 0 && nextPath.slice(-1) === "&") {
        nextPath = nextPath.slice(0, -1);
    }
    return nextPath
}