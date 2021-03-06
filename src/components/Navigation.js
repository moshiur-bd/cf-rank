
import { useState } from 'react'
import { Form, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./css/Navigation.css"
import {BuildUrl} from "../lib/UrlInfo"
import {GetRanklistUrl} from "../lib/Goto"



export default function Navigation(props){
    var rUrl = props.url
    var rContestID = props.contestID
    var rHandles = props.handles
    var rUnofficial = props.unofficial


    const [url, setUrl] = useState(rUrl)
    const [contestID, setContestID] = useState(rContestID)
    const [handles, setHandles] = useState(rHandles)
    const [unofficial, setUnofficial] = useState(rUnofficial)
    const [invisible, setInvisible] = useState(false)

    var InputJSX = <div className={invisible? "hide-me":"parent-input-div one-elm-flex"}>
        <Form key={rUrl + rContestID} className="width-hundred one-elm-flex">
            <div className="width-hundred flex-input-div">
                
                <div className="handles-div min-width one-elm-flex">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        Handles
                    </Form.Label>
                    <FormControl
                        size="sm"
                        className="mb-0 org-field"
                        id="inlineFormInput"
                        placeholder="handles seperated by ;"
                        // defaultValue={rHandles}
                        value={handles}
                        onChange={e => setHandles(e.target.value)}
                    // onLoad={e => setUrl(e.target.value)}
                    />
                </div>

                <div className="url-div min-width one-elm-flex">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        URL
                    </Form.Label>
                    <FormControl
                        size="sm"
                        className="mb-0 org-field"
                        id="inlineFormInput"
                        placeholder="city/organization cf url seperated by ;"
                        // defaultValue={rUrl}
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        // onLoad={e => setUrl(e.target.value)}
                    />
                </div>
                <div className="contest-div min-width one-elm-flex">
                    <Form.Label htmlFor="inlineFormInput2" srOnly>
                        ContestID
                    </Form.Label>
                    <FormControl
                        size="sm"
                        className="mb-0"
                        id="inlineFormInput2"
                        placeholder="ContestID"
                        value={contestID}
                        onChange={
                            (e) => {
                                setContestID(e.target.value)
                            }
                        }
                    />
                </div>
               
                <div className="unofficial-div min-width one-elm-flex">
                    <input type="checkbox" className="btn-light" checked={unofficial} onChange={e=>{
                        setUnofficial(e.target.checked)
                    }}/> <span>unofficial</span>
                </div>

                <div className="button-div min-width one-elm-flex">
                    <Link to={GetRanklistUrl( contestID, url, handles, props.parsedHandles, unofficial)}>
                        <Button type="submit" className="mb-0 btn-light" size="sm">
                            Load
                        </Button>
                    </Link>
                </div>
            </div>
        </Form>
    </div>

    
    return <div>
        <Navbar bg="dark" variant="dark" className='navbar-expand-sm'>
        <Nav className="mr-auto width-hundred">
            <Nav.Link href={BuildUrl("#selector/contests/", contestID, url, handles, props.parsedHandles, unofficial)} active={props.location.pathname.startsWith("/selector/contests")}>Contests</Nav.Link>
            <Nav.Link href={BuildUrl("#selector/orgs/", contestID, url, handles, props.parsedHandles, unofficial)} active={props.location.pathname.startsWith("/selector/orgs")}>Orgs</Nav.Link>
            <Nav.Link disabled active={props.location.pathname.startsWith("/contest")}>Ranklist</Nav.Link>

            <div className="one-elm-flex"><input type="checkbox" onClick={e => setInvisible(e.target.checked)} value={invisible} /></div>
            {InputJSX}
        </Nav>

        
    </Navbar>
    </div>

}