import Input from './Input'
import { useLocation } from 'react-router';

import { useState, useEffect } from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Navigation.css"
import {BuildUrl} from "../lib/UrlInfo"



export default function Navigation(props){
    var rUrl = props.url
    var rContestID = props.contestID
    var rHandles = props.handles


    const [url, setUrl] = useState(rUrl)
    const [contestID, setContestID] = useState(rContestID)
    const [handles, setHandles] = useState(rHandles)


    console.log("Nav-props",props)


    var InputJSX = <div className="input-url">
        <Form  key={rUrl+rContestID}>
            <Form.Row className="align-items-center">
                <Col xs="auto">
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
                </Col>

                <Col xs="auto">
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
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput2" srOnly>
                        ContestID
                    </Form.Label>
                    <FormControl
                        size="sm"
                        className="mb-0 contestID-field"
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
                </Col>
               
                <Col xs="auto">
                    <Link to={BuildUrl("/contest/", contestID, url, handles)}>
                        <Button type="submit" className="mb-0 btn-light" size="sm">
                            Load
                        </Button>
                    </Link>
                </Col>
            </Form.Row>
        </Form>
    </div>

    
    return <div>
        <Navbar bg="dark" variant="dark" className='navbar-expand-sm'>
        <Nav className="mr-auto">
            <Nav.Link href={BuildUrl("#selector/contests/", contestID, url, handles)} active={props.location.pathname.startsWith("/selector/contests")}>Contests</Nav.Link>
            <Nav.Link disabled active={props.location.pathname.startsWith("/contest")}>Ranklist</Nav.Link>
        </Nav>
        {InputJSX}
    </Navbar>
    </div>

}