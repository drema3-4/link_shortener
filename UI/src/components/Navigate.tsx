import { Navbar, Nav,   Button} from "react-bootstrap"
import logo from '../assets/logo.png'
import Authorized from "../auth/Authorized"
import AuthenticationContext from "../auth/AuthenticationContext";
import { logout } from "../auth/handleJWT";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function NavigateComponent() {
    const history = useNavigate();
    const {update, claims} = useContext(AuthenticationContext);
    function getUserEmail(): string {
        return claims.filter(x => x.name === "email")[0]?.value;
    }
    return (
        <Navbar className="bg-body-tertiary justify-content-between" bg="light" data-bs-theme="light">
            <Navbar.Brand href="/">
                <img style={ {width: '2em'} } src={logo} />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Authorized authorized = {
                    <>
                        <Nav.Link href="/createLink">Create link</Nav.Link>
                        <Nav.Link href="/links">Links</Nav.Link>
                    </>
                }>
                </Authorized>
            </Nav>
            <Authorized authorized = {
                    <>
                        <span> Hello, {getUserEmail()} </span>
                        <Button
                            style={{marginLeft: '1em', marginRight: '1em'}}
                            onClick={() => {
                                logout();
                                update([]);
                                history('/login');
                            }}
                            className="nav-link btn btn-link"
                        >
                            Log out
                        </Button>
                    </>
                }>
                </Authorized>
        </Navbar>
    )
}
