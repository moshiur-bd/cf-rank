import { useState } from 'react'
import { Spinner, Table, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Input =  ({contestID, url}) => {
    const [sUrl, setUrl] = useState(url)
    const [sContestID, setContestID] = useState(contestID)


return <div className="input-url">
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
                        onChange={e=>setContestID(e.target.value)}
                    />
                </InputGroup>
            </Col>
            <Col xs="auto">
                <Link to={"/contest/" + sContestID + "?url=" + sUrl}>
                    <Button type="submit" className="mb-2">
                        Fetch
                    </Button>
                </Link>
            </Col>
        </Form.Row>
    </Form>
</div>
}

export default Input