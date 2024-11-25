import { Form, FormGroup, FormControl, Button } from "react-bootstrap"

export function LoginFormComponent() {

    return (
        <Form>
            <FormGroup>
                <Form.Label>Enter your login</Form.Label>
                <FormControl
                    placeholder="Login"
                />
            </FormGroup>
            <FormGroup>
                <Form.Label>Enter your password</Form.Label>
                <FormControl
                    placeholder="Password"
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