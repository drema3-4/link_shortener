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
        console.log('here')
    }
    
    // addLink(link) {
    //     if (link) {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open('post', url, true);
    //         xhr.send(link);
    //     }
    // }

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
                <Form onSubmit={this.ha}>
                    <Form.Group style={{margin: '20px'}}>
                        <Form.Label> Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придётся видеть длинные url-адреса, занимающие много места.</Form.Label>
                        <Form.Control
                            type="link"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="Введите ссылку, которую нужно сократить" />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        style={{margin: '20px'}} > Сократить </Button>
                </Form>
            </Container>
        )
    }
}