import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

export function NavigateComponent() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.legacy.reactjs.org%2F&psig=AOvVaw19Dh5pl6LXFixhZHko6B8a&ust=1732590316542000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCBnITA9okDFQAAAAAdAAAAABAE" alt="..." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/links">Links</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}