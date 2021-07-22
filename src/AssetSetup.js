import { ParseCFOrgs, ParseHandlesFromSingleURLAndPages, CF_ORG_URL}  from './lib/CF'
import {Component} from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, ProgressBar } from 'react-bootstrap'



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
        debugger
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
        for (let org of orgs) {
            let fileName = "id.org." + org.id + ".json"
            const work = async () => {
                let handles = await ParseHandlesFromSingleURLAndPages(CF_ORG_URL(org.id), org.hc)
                this.AutoDownload(fileName, JSON.stringify({ handles: handles }))
            }

            if (!this.ls.has(fileName)) {
                promises.push(work())
            }
            
            
            stepCount++
            if (stepCount % 50 === 0) {
                await Promise.all(promises)
                this.setState({ completed: 1 + stepCount, total: 1 + orgs.length})
                promises = []
            }
        }
    }
}

