import { Form, FormGroup, FormControl, Button, InputGroup, Row, Col } from "react-bootstrap";
import { ErrorMessageComponent } from "./ErrorMessage";
import { useCreateLink } from "../hooks/createLink";


export function CreateLinkComponent() {
    const { link, name, shortLink, error,
            errorMessage, submitHandler,
            changeLinkHandler, changeNameHandler,
            copyShortLink } = useCreateLink()

    return (
        <Row className='justify-content-center' style={{marginTop: '6em'}}>
            <Col xs={5} className='justify-content-center'>
                { !shortLink && 
                    <Form onSubmit={submitHandler}>
                        { error && !errorMessage &&
                        <Form.Text> Something wrong! Try again! </Form.Text> }
                        { error && errorMessage &&
                        <ErrorMessageComponent error={errorMessage} /> }
                        <FormGroup>
                            <Form.Label>Enter the link you want to shorten</Form.Label>
                            <FormControl
                                id="basic-url"
                                placeholder="URL"
                                value={link}
                                onChange={changeLinkHandler}
                            />
                        </FormGroup>
                        <FormGroup style={{marginTop: '1em'}}>
                            <Form.Label>
                                Enter a name for the shortened link (optional)
                            </Form.Label>
                            <FormControl
                                placeholder="Name"
                                value={name}
                                onChange={changeNameHandler}
                            />
                        </FormGroup>
                        <Button
                            variant="primary"
                            type="submit"
                            style={{marginTop: '1em'}}
                        >
                            Shorten
                        </Button>
                    </Form> 
                }
                { shortLink && !error && 
                    <Form>
                        <Form.Label>Your short link</Form.Label>
                        <InputGroup>
                            <FormControl
                                type="text"
                                value={shortLink}
                                readOnly
                                disabled
                            />
                            <Button
                                variant="primary"
                                onClick={copyShortLink}
                            >
                                Copy
                            </Button>
                        </InputGroup>
                    </Form>
                }
            </Col>
        </Row>
    )
}