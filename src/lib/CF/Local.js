
import {UniqueParsedHandles} from '../Handles'
import { CF_API, CF_FE, CONTEST_FINISHED } from './Constants'


export const CF_ORG_URL = (orgID) => CF_FE + `/ratings/organization/` + orgID
export const CF_ORG_URL_TO_ID = (url) => url.substr(url.lastIndexOf('/') + 1)

export const UrlsToNames = async (url) => {
    let orgs = await ParseCFOrgsCached()
    let names = ""
    let urls = url.split(";")
    for (let i = 0; i < urls.length; i++) {
        if (urls[i] === "") return
        let lastPart = urls[i].substr(urls[i].lastIndexOf('/') + 1)
        let org = orgs.find(o => o.id == lastPart)
        names += (org ? org.name : lastPart) + " || "
    }

    return (names.length < 4)? "": names.substr(0, names.length - 4)
}

export async function ParseCFOrgsCached() {
    return fetch("assets/orgs.json", {
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then((response) => {
        if(response.status === 200) {
            return response.json()
        }
        return null
    })
}

export async function ParseCFHandlesCached(url) {
    let orgID = CF_ORG_URL_TO_ID(url)
    return fetch("assets/handles/id.org." + orgID + ".json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then((response) => {
            if(response.status !== 200) {
                return {handles:""}
            }
            return response.json()
        })
}

export function GetContestStatusText(status) {
    if (status === CONTEST_FINISHED) {
        return "Final Standings"
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

export function GetHandleTitle(rating) {
    if (rating < 1200) {
        return "newbie"
    }

    if (rating < 1400) {
        return "pupil"
    }

    if (rating < 1600) {
        return "specialist"
    }

    if (rating < 1900) {
        return "expert"
    }
}