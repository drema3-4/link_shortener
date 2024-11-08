import React, { Component, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import logo from '../assets/logo.png';

export default class TakeGetLink extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        const response = fetch("http://localhost:7106/api/Link/CreateLink/", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
                "id": 0,
                "name": "string",
                "url": "http://youtube.com",
                "createdBy": "string"

            }),
        }).then((response) => response.json());
        console.log(response)
    }

    render() {
        return (
            <Container
                style={ { width: '700px',
                          margin: '20px' } } >
                <img
                    src={logo}
                    height="100"
                    width="100"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
                <h1
                    className="text-center"
                    style={{margin: '20px'}} > Укоротитель ссылок </h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group style={{margin: '20px'}}>
                        <Form.Label> Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придётся видеть длинные url-адреса, занимающие много места.</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="Введите ссылку, которую нужно сократить" />
                        <Button
                            variant="primary"
                            type="submit"
                            style={{margin: '20px'}} > Сократить </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

