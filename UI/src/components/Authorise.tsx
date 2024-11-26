import { Button, Form, FormControl } from "react-bootstrap"
import { useState } from "react"
import { ChangeEvent } from "react"

export function AuthoriseComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault() 
    }

    const changeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const changePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <Form onSubmit={submitHandler}>
            <FormControl>
                <Form.Label>Enter your email</Form.Label>
                <FormControl 
                    placeholder="Login"
                    value={email}
                    onChange={changeEmailHandler}
                />
            </FormControl>
            <FormControl>
                <Form.Label>Enter your password</Form.Label>
                <FormControl 
                    id="password"
                    placeholder="Login"
                    value={password}
                    onChange={changePasswordHandler}
                />
            </FormControl>
            <Button
                variant="primary"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    )
}