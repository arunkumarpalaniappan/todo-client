import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';

class Login extends Component {
    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Email Address' placeholder='Email Address' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Password' placeholder='Password' />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default Login