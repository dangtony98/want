import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

export class LoginForm extends Component {
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
                    'username',
                    'Username'
                )}
                {this.renderInputField(
                    'password',
                    'password',
                    'Password'
                )}
                <button className="login-button button-shaded">Login</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({ form: 'login' })(LoginForm);