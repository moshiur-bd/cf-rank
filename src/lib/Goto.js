import { BuildUrl, UrlInfo } from "./UrlInfo";

export function GetRanklistUrl(contestID, url, handles, parsedHandles){
    return BuildUrl("/contest", contestID, url, handles, parsedHandles)
}