import { Form } from "react-bootstrap"
import { useRedirect } from "../hooks/redirect"
import { useParams } from "react-router-dom"

export function RedirectComponent() {
    const params = useParams();
    const redirect = useRedirect({name: params.name})
    if (redirect.originLink) {
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