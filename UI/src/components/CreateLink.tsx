import { Form, FormGroup, FormControl, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { ChangeEvent } from "react";
import axios from "axios";
import { ICreateLinkRequest, ICreateLinkResponse } from "../models";

export function CreateLinkComponent() {
    const [link, setLink] = useState('')
    const [name, setName] = useState('')
    const [shortLink, setShortLink] = useState('')
    const [error, setError] = useState(false)

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        const request: ICreateLinkRequest = { name: name, url: link}

        const response = await axios.get<ICreateLinkResponse>('http://localhost:7106/api/Link/CreateLink', request)

        if (response.status === 200 && !response.data.errors) {
            setShortLink('http://localhost:5173/' + response.data.message)
        } else {
            setError(true)
        }
    }

    const changeLinkHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value)
        setError(false)
    }

    const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        setError(false)
    }

    return (
        <>
            { !shortLink && 
                <Form onSubmit={submitHandler}>
                    { error && 
                    <Form.Text> Something wrong! Try again! </Form.Text> }
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