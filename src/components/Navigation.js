import Input from './Input'
import { useLocation } from 'react-router';

import { useState, useEffect } from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'




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
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="city/organization cf url"
                        defaultValue={rUrl}
                        onChange={e => setUrl(e.target.value)}
                        // onLoad={e => setUrl(e.target.value)}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        ContestID
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>@contest-</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
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
                </Col>
                <Col xs="auto">
                    <Link to={"/contest/" + contestID + "?url=" + url}>
                        <Button type="submit" className="mb-2">
                            Load
                        </Button>
                    </Link>
                </Col>
            </Form.Row>
        </Form>
    </div>

    
    return <div>
        <Navbar bg="dark" variant="dark" size="small" >
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