import { Container, Row, Col, Image, Button, Form, InputGroup } from "react-bootstrap";
import logo from "../assets/logo.png"

export function LinkFormComponent() {

    return (
        <Container className="justify-content-center">
            <Row>
                <Col xs={2}>
                    <Image src={logo} />
                </Col>
            </Row>
            <Row >
                <Col xs={6}>
                    Help customers quickly find your page on the Internet.
                    With a short link, customers don't have to see long
                    URLs that take up a lot of space.
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <InputGroup>
                        <Form.Control
                            type="basic-url"
                            placeholder="Enter the link you want to shorten"
                        />
                        <Button variant="secondary">Short</Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}