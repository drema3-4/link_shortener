import { Navbar, Container, Nav, NavDropdown, NavLink, Button } from "react-bootstrap"
import logo from '../assets/logo.png'
import Authorized from "../auth/Authorized"
import AuthenticationContext from "../auth/AuthenticationContext";
import { logout } from "../auth/handleJWT";
import { useContext } from "react";

export function NavigateComponent() {
    const {update, claims} = useContext(AuthenticationContext);
    function getUserEmail(): string {
        return claims.filter(x => x.name === "email")[0]?.value;
    }
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Navbar.Brand href="/">
                <img style={ {width: '2em'} } src={logo} />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Authorized authorized = {
                    <>
                        <span className="nav-link">
                            Hello, {getUserEmail()}
                            <Button
                                onClick={() => {
                                    logout();
                                    update([]);
                                }}
                                className="nav-link btn btn-link"
                            >
                                Log out
                            </Button>
                        </span>

                        <Nav.Link href="/createLink">Create link</Nav.Link>
                        <Nav.Link href="/links">Links</Nav.Link>
                    </> }
                    // notAuthorized = {
                    //     <>
                    //         <Nav.Link href="/login">Login</Nav.Link>
                    //         <Nav.Link href="/signUp">Register</Nav.Link>
                    //     </>
                    // }
                >
                </Authorized>
            </Nav>
        </Navbar>
    )
}
