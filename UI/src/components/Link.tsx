import { Form, InputGroup, Button } from "react-bootstrap";

export function LinkComponent() {

    return (
        <Form>
            <Form.Label> The original version of the link </Form.Label>
            <InputGroup>
                <Form.Control
                    type="text"
                    value={"https://google.com"}
                    disabled
                    readOnly
                />
                <Button
                    variant="primary"
                >
                    Copy
                </Button>
            </InputGroup>
            <Form.Label> The short version of the link </Form.Label>
            <InputGroup>
                <Form.Control
                    type="text"
                    value={"https://123e.com"}
                    disabled
                    readOnly
                />
                <Button
                    variant="primary"
                >
                    Copy
                </Button>
            </InputGroup>
            <Button
                variant="danger"
            >
                Remove
            </Button>
        </Form>
    )
}