import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

export class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.renderInputField = this.renderInputField.bind(this);
    }

    renderInputField(inputType, name, placeholder) {
        return (
            <Field 
                name={name}
                component="input"
                type={inputType}
                placeholder={placeholder}
                autoComplete="off"
                required="true"
                className="login-input input-text marg-b-sm"
            />
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                {this.renderInputField(
                    'text',
                    'firstName',
                    'First name'
                )}
                {this.renderInputField(
                    'text',
                    'lastName',
                    'Last name'
                )}
                {this.renderInputField(
                    'email',
                    'email',
                    'Email'
                )}
                {this.renderInputField(
                    'password',
                    'password',
                    'Password'
                )}
                {this.renderInputField(
                    'password',
                    'repassword',
                    'Re-enter password'
                )}
                <button className="signup-button button-shaded">Create account</button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({ form: 'signup' })(SignupForm);