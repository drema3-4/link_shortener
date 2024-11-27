import { Form } from "react-bootstrap"
import { useRedirect } from "../hooks/redirect"
import { Link, useSearchParams } from "react-router-dom"

export function RedirectComponent() {
    const [searchParams, setSearchParams] = useSearchParams()
    const redirect = useRedirect({name: searchParams.get("name")})

    if (redirect) {
        document.location.href = redirect.originLink
        return null
    }

    return (
        <Form>
            { !redirect && 
                <Form.Text> Something wrong! </Form.Text>
            }
        </Form>
    )
}