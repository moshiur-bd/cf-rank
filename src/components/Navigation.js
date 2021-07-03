import Input from './Input'
import { useLocation } from 'react-router';

import { useState, useEffect } from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Navigation.css"




export default function Navigation(props){
    var rUrl = props.url
    var rContestID = props.contestID


    const [url, setUrl] = useState(rUrl)
    const [contestID, setContestID] = useState(rContestID)


    console.log("Nav-props",props)


    var InputJSX = <div className="input-url">
        <Form  key={rUrl+rContestID}>
            <Form.Row className="align-items-center">
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
                {/* <Col xs="auto" >
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        ContestID
                    </Form.Label>
                    <InputGroup className="mb-2 contestID-field" size="sm">
                        <InputGroup.Prepend size="sm">
                            <InputGroup.Text size="sm">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            size="sm"
                            id="inlineFormInputGroup"
                            placeholder="ContestID"
                            value={contestID}
                            onChange={
                                (e)=> {
                                    debugger
                                    setContestID(e.target.value)
                                }
                            }
                        />
                    </InputGroup>
                </Col> */}
                <Col xs="auto">
                    <Link to={"/contest/" + contestID + "?url=" + url}>
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
        {/* <Navbar.Brand href="">Navbar</Navbar.Brand> */}
        <Nav className="mr-auto">
                <Nav.Link href={"#selector/contests/" + contestID + "?url=" + url} active={props.location.pathname.startsWith("/selector/contests")}>Contests</Nav.Link>
            <Nav.Link disabled active={props.location.pathname.startsWith("/contest")}>Ranklist</Nav.Link>
            {/* <Nav.Link href="#region">Features</Nav.Link> */}
        </Nav>
        {InputJSX}
        {/* <Input contestID={contestID} url={url}/> */}
    </Navbar>
    </div>

}