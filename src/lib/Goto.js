import { BuildUrl, UrlInfo } from "./UrlInfo";

export function GetRanklistUrl(contestID, url, handles, parsedHandles, unofficial){
    return BuildUrl("/contest", contestID, url, handles, parsedHandles, unofficial)
}