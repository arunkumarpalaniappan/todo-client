import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';

class Signup extends Component {
    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Email Address' placeholder='Email Address' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Password' placeholder='Password' />
                    <Form.Input fluid label='Confirm Password' placeholder='Confirm Password' />
                </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }
}

export default Signup