import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { login } from '../../services/api/authentication';
import PropTypes from 'prop-types';

export class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;        
        if (email != '' && password != '') {
            login(this.state, this.props);
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.handleChange} 
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    className="input-text settings-input marg-b-sm"
                    required
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.handleChange} 
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="input-text settings-input marg-b-sm"
                    required
                />
                <button className="login-button button-shaded">Login</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(LoginForm);