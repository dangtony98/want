import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { register } from '../../services/api/authentication';
import PropTypes from 'prop-types';

export class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            repassword: ''
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const { first_name, last_name, email, password, repassword } = this.state;
        if (first_name != '' && last_name != '' && email != '' && password != '' && repassword != '') {
            if (password == repassword) {
                register(this.state, this.props);
            } else {
                // DISPLAY PASSWORD DOESN'T MATCH REPASSWORD ERROR
            }
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { first_name, last_name, email, password, repassword } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="first_name"
                    value={first_name}
                    onChange={this.handleChange} 
                    type="text"
                    placeholder="First name"
                    autoComplete="off"
                    className="login-input input-text marg-b-sm"
                    required
                />
                <input
                    name="last_name"
                    value={last_name}
                    onChange={this.handleChange} 
                    type="text"
                    placeholder="Last name"
                    autoComplete="off"
                    className="login-input input-text marg-b-sm"
                    required
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.handleChange} 
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="login-input input-text marg-b-sm"
                    required
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.handleChange} 
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="login-input input-text marg-b-sm"
                    required
                />
                <input
                    name="repassword"
                    value={repassword}
                    onChange={this.handleChange} 
                    type="password"
                    placeholder="Re-enter password"
                    autoComplete="off"
                    className="login-input input-text marg-b-sm"
                    required
                />
                <button className="signup-button button-shaded">Create account</button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(SignupForm);