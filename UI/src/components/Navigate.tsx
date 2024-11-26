import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import logo from '../assets/logo.png'

export function NavigateComponent() {

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Navbar.Brand href="/">
                <img style={ {width: '2em'} } src={logo} />
                </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/createLink">Create link</Nav.Link>
                <Nav.Link href="/links">Links</Nav.Link>
            </Nav>
      </Navbar>
    )
}