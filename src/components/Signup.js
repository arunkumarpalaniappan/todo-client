import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            showLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        let fullName = document.getElementById("name").value;
        let userName = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if (fullName.trim().length === 0) {
            this.setState({ error: 'Name is Required' });
        } else if (userName.trim().length === 0) {
            this.setState({ error: 'Email Address is Required' });
        } else if (password.length === 0) {
            this.setState({ error: 'Password is Required' });
        } else if (userName.indexOf("@") < 1 || userName.lastIndexOf(".") < userName.indexOf("@") + 2 || userName.lastIndexOf(".") + 2 >= userName.length) {
            this.setState({ error: 'Invalid Email Address is Entered' });
        } else {
            this.setState({ error: '', showLoading: true })
            //TO-DO
        }
    }
    render() {
        const { visible, onClose } = this.props;
        return (
            <div className="text">
                <Modal show={visible} bsSize="large" aria-labelledby="contained-modal-title-lg">
                    <Modal.Body>
                        <div className="popuptitle">Sign Up</div>
                        <br /><br />
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} id="name" placeholder="Full Name" />
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="aliyun" style={{ color: 'rgba(0,0,0,.25)' }} />} id="email" placeholder="Email Address" />
                            </FormItem>
                            <FormItem>
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} id="password" type="password" placeholder="Password" />
                            </FormItem>
                            <span className={"error"}>{this.state.error}</span>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="modal-btn modal-btn-secondary" onClick={onClose}>Close</Button>
                        <Button bsStyle="primary" onClick={this.handleSubmit} disabled={this.state.showLoading}>{this.state.showLoading ? <Icon type="loading" /> : null}&nbsp;&nbsp;Signup</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default Signup