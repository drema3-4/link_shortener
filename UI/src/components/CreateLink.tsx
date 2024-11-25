import { Form, Image, FormGroup, FormControl, Button } from "react-bootstrap";

export function CreateLinkComponent() {

    return (
        <Form>
            <Image />
            <FormGroup>
                <Form.Label>Enter your link</Form.Label>
                <FormControl
                    id="basic-url"
                    placeholder="URL"
                />
            </FormGroup>
            <FormGroup>
                <Form.Label>Enter link name</Form.Label>
                <FormControl
                    placeholder="Name"
                />
            </FormGroup>
            <Button
                variant="primary"
            >
                Submit
            </Button>
        </Form>
    )
}