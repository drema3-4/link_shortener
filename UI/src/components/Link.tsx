import { Form, InputGroup, Button } from "react-bootstrap";
import { ILink } from "../models";

interface LinkProps {
    link: ILink
}

export function LinkComponent(props: LinkProps) {

    return (
        <Form>
            <Form.Label> The original version of the link </Form.Label>
            <InputGroup>
                <Form.Control
                    type="text"
                    value={ props.link.originLink }
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
                    value={ props.link.shortLink }
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