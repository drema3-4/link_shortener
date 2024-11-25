import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

export function RegistrationFormComponent() {

    return (
        <Form>
            <FormGroup>
                <Form.Label>Enter your email</Form.Label>
                <FormControl 
                    placeholder="Email"
                />
            </FormGroup>
            <FormGroup>
                <Form.Label>Enter password</Form.Label>
                <FormControl 
                    placeholder="Password"
                />
            </FormGroup>
            <FormGroup>
                <Form.Label>Repeat password</Form.Label>
                <FormControl 
                    placeholder="Repeat password"
                />
            </FormGroup>
            <Button
                variant="primary"
            >
                Sing up
            </Button>
        </Form>
    )
}