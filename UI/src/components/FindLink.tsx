import { Form, Image, FormGroup, FormControl, Button } from "react-bootstrap";
import { ChangeEvent, useState } from "react";

export function FindLinkComponent() {
    const [link, setLink] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value)
    }

    return (
        <Form onSubmit={submitHandler}>
            <Image />
            <FormGroup>
                <Form.Label>Enter link for find short link</Form.Label>
                <FormControl
                    type="text"
                    placeholder="URL"
                    value={link}
                    onChange={changeHandler}
                />
            </FormGroup>
            <Button
                variant="primary"
                type="submit"
            >
                Find
            </Button>
        </Form>
    )
}