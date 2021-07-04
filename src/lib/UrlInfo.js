

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


function getHashCode(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

export function UrlInfo(props){
    let handles = getQueryVariable(props.location.search, "handles")
    if(handles.length > 0 && handles.slice(-1) != ";"){
        handles = handles + ";"
    }

    let parsedHandles = getQueryVariable(props.location.search, "parsedHandles")
    if (parsedHandles.length > 0 && parsedHandles.slice(-1) != ";") {
        parsedHandles = parsedHandles + ";"
    }

    return {
        url: getQueryVariable(props.location.search, "url"),
        contestID: props.match.params.contestID,
        handles: handles,
        parsedHandles: parsedHandles,
    }
}

export function HashFromURL(props){
    const {url, contestID, handles, parsedHandles} = UrlInfo(props)
    return getHashCode(url + contestID + handles + parsedHandles)
}


export function SameUrl(prop1, prop2){
    return HashFromURL(prop1) == HashFromURL(prop2)
}

export function BuildUrl(to, contestID, url, handles, parsedHandles){

    let nextPath = to
    if (nextPath.length > 0 && nextPath.slice(-1)!= "/")
    {
        nextPath = nextPath + "/"
    }
    if(!contestID) {
        contestID = 1541
    }
    nextPath = nextPath + contestID + "?"
    if(url !== ""  && url != undefined){
        nextPath = nextPath + "url=" + url + "&"
    } else {
        parsedHandles = ""
    }


    if (handles !== "" && handles != undefined) {
        nextPath =  nextPath + "handles=" + handles + "&"
    }

    if (parsedHandles !== "" && parsedHandles != undefined) {
        nextPath = nextPath + "parsedHandles=" + parsedHandles + "&"
    }

    if (nextPath.length > 0 && nextPath.slice(-1) === "&") {
        nextPath = nextPath.slice(0, -1);
    }
    return nextPath
}