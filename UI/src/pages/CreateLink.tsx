import { NavigateComponent } from "../components/Navigate"
import { CreateLinkComponent } from "../components/CreateLink"
import { Container } from "react-bootstrap"

export function CreateLinkPage() {

    return (
        <>
            <NavigateComponent />
            <Container>
                <CreateLinkComponent />
            </Container>
        </>
    )
}