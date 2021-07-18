import { BuildUrl, UrlInfo } from "./UrlInfo";

export function GetRanklistUrl(contestID, url, handles, parsedHandles, unofficial){
    return BuildUrl("/contest", contestID, url, handles, parsedHandles, unofficial)
}

export function GetOrgsUrl(contestID, url, handles, parsedHandles, unofficial) {
    return BuildUrl("/selector/orgs", contestID, url, handles, parsedHandles, unofficial)
}

export function GetContestUrl(contestID, url, handles, parsedHandles, unofficial) {
    return BuildUrl("/selector/contests", contestID, url, handles, parsedHandles, unofficial)
}