import Input from './Input'
import { useLocation } from 'react-router';

import { useState } from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'




export default function Navigation({contestID, url}){
    let location = useLocation()
    var path = location.pathname

    const [sUrl, setUrl] = useState(url)
    const [sContestID, setContestID] = useState(contestID)


    var InputJSX = <div className="input-url">
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        URL
                    </Form.Label>
                    <FormControl
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="city/organization cf url"
                        defaultValue={url}
                        onChange={e => setUrl(e.target.value)}
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
                            defaultValue={contestID}
                            onChange={e => setContestID(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Link to={"/contest/" + sContestID + "?url=" + sUrl}>
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
            <Nav.Link href={"#selector/contests/" + sContestID + "?url="+sUrl} active={path.startsWith("/selector/contests")}>Contests</Nav.Link>
            <Nav.Link disabled active={path.startsWith("/contest")}>Ranklist</Nav.Link>
            {/* <Nav.Link href="#region">Features</Nav.Link> */}
        </Nav>
        {InputJSX}
        {/* <Input contestID={contestID} url={url}/> */}
    </Navbar>
    </div>

}