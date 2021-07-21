import { ParseCFOrgs, ParseHandlesFromSingleURLAndPages, CF_ORG_URL}  from './lib/CF'
import {Component} from 'react'

const setup = async () => {
    console.log("Starting setup")
    let orgs = await ParseCFOrgs()
    AutoDownload("orgs.json", JSON.stringify(orgs))
    console.log("parsing all handles")
    await scrapeAllHandles(orgs)

    console.log("all files downloaded")
}

async function scrapeAllHandles(orgs){
    let limit = 0;
    let handlesMap = {}
    for(let org of orgs){
        let handles = await ParseHandlesFromSingleURLAndPages(CF_ORG_URL(org.id))
        handlesMap["o:"+org.id] = handles
        limit++
        if(limit > 5){
            break
        }
    }
    debugger
    AutoDownload("handles.json", JSON.stringify(handlesMap))
}


export function AutoDownload(name, data) {
    debugger
    // Create blob link to download
    const url = window.URL.createObjectURL(
        new Blob([data]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
        'download',
        name,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
}

export default class AssetSetup extends Component {

    componentDidMount(){
        setup()
    }

    render(){
        return <p>downloading assets</p>
    }
}

