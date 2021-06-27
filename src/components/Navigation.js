import Input from './Input'
import { useLocation } from 'react-router';

import { useState, useEffect } from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BSMRSTU_ORG_URL = `https://codeforces.com/ratings/organization/3403`



export default function Navigation(props){
    var rUrl = BSMRSTU_ORG_URL
    var rContestID = 1455

    try{
        rUrl = props.location.search.match(`url=(.+)`)[1]
        rContestID = props.match.params.contestID
    }
    catch(e){
        console.log("error in navigation", e)
    }

    const [url, setUrl] = useState(rUrl)
    const [contestID, setContestID] = useState(rContestID)

    // useEffect(() => {
    //     setUrl(rUrl)
    //     setContestID(rContestID)
    //     console.log("set states", url, contestID)
    // });

    //debugger

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