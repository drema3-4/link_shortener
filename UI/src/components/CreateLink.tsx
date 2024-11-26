import { Form, FormGroup, FormControl, Button, InputGroup } from "react-bootstrap";
import { ErrorMessageComponent } from "./ErrorMessage";
import { useCreateLink } from "../hooks/createLink";

export function CreateLinkComponent() {
    const { link, name, shortLink, error,
            errorMessage, submitHandler, changeLinkHandler, changeNameHandler } = useCreateLink()

    return (
        <>
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
                    <FormGroup>
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
                            type="submit"
                        >
                            Copy
                        </Button>
                    </InputGroup>
                </Form>
            }
        </>
    )
}