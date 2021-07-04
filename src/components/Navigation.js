import Input from './Input'
import { useLocation } from 'react-router';

import { useState, useEffect } from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Navigation.css"
import {BuildUrl} from "../lib/UrlInfo"
import {GetRanklistUrl} from "../lib/Goto"



export default function Navigation(props){
    var rUrl = props.url
    var rContestID = props.contestID
    var rHandles = props.handles


    const [url, setUrl] = useState(rUrl)
    const [contestID, setContestID] = useState(rContestID)
    const [handles, setHandles] = useState(rHandles)

    var InputJSX = <div className="parent-input-div one-elm-flex">
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
                        defaultValue={rHandles}
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
                        placeholder="city/organization cf url"
                        defaultValue={rUrl}
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
                                debugger
                                setContestID(e.target.value)
                            }
                        }
                    />
                </div>
               
                <div className="button-div min-width one-elm-flex">
                    <Link to={GetRanklistUrl( contestID, url, handles, props.parsedHandles)}>
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
            <Nav.Link href={BuildUrl("#selector/contests/", contestID, url, handles, props.parsedHandles)} active={props.location.pathname.startsWith("/selector/contests")}>Contests</Nav.Link>
            <Nav.Link disabled active={props.location.pathname.startsWith("/contest")}>Ranklist</Nav.Link>
            {InputJSX}
        </Nav>
        
    </Navbar>
    </div>

}