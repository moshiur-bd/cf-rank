import { ParseCFOrgs, ParseCFHandles } from './lib/CF/API'
import { CF_ORG_URL } from './lib/CF/Local'
import {Component} from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, ProgressBar } from 'react-bootstrap'
import { StringToHandleSet } from './lib/Handles'

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function ParseFileLS() {
    return fetch("/assets/ls.txt", {
        headers: {
            'Content-Type': 'text',
            'Accept': 'text'
        }
    })
        .then((response) => {
            return response.text()
        })
}

class RateLimit {
    constructor(counter) {
        this.counter = counter; // how many users can use the resource at one, set 1 for regular lock
    }
    async exec(cb) {
        while (true) {
            if (this.counter > 0) { // there is no one wating for the resource
                this.counter--; // update the resource is in usage
                return await cb();  // fire the requested callback
            }
            await sleep(200)
        }
    }

    done() {
        this.counter++;
    }
}

export default class AssetSetup extends Component {

    AutoDownload(name, data) {
        if(this.ls.has(name)){
            return
        }
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


    constructor(){
        super()
        this.state={completed:0, total:10}
        this.ls = new Set()
        this.rateLimit = new RateLimit(50)
    }

    componentDidMount(){
        this.setup()
    }

    render(){
        return <div>
            <p>downloading assets</p>
            <ProgressBar variant="info" label={Math.round((this.state.completed / this.state.total) * 100)}  now={Math.round((this.state.completed / this.state.total) * 100)} animated={this.state.completed != this.state.total} ></ProgressBar>
        </div>
    }

    async setup (){
        this.ls = new Set((await ParseFileLS()).split(/\n/))
        console.log("Starting setup")
        let orgs = await ParseCFOrgs()
        this.setState({completed:1, total:100})
        this.AutoDownload("orgs.json", JSON.stringify(orgs))
        console.log("parsing all handles")
        await this.scrapeAllHandles(orgs)
        console.log("all files downloaded")
        this.setState({ completed: 100, total: 100 })
    }

    async scrapeAllHandles(orgs) {
        let stepCount = 0
        let promises = []
        this.setState({total: orgs.length})
        for (let org of orgs) {
            let fileName = "id.org." + org.id + ".json"
            const work = async () => {
                let resp = await ParseCFHandles(CF_ORG_URL(org.id), org.hc)
                let phc = StringToHandleSet(resp.handles).size
                if(phc >= org.hc){
                    this.AutoDownload(fileName, JSON.stringify(resp))
                } else {
                    console.table({log:"Couldn't parse org", orgID:org.id, orgName:org.name, handles:resp.handles, parsedHandleCount:phc, expectedHandleCount:org.hc})
                }
            }

            if (!this.ls.has(fileName)) {
                this.rateLimit.exec(()=> work().then(()=>{ 
                    this.rateLimit.done()
                    stepCount++
                    if (stepCount % 10 === 0) {
                        this.setState({ completed: stepCount, total: orgs.length })
                    }
                }))
            } else {
                stepCount++
            }
            
            

        }
    }
}

