import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

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
        if (this.state.email != '' && this.state.password != '') {
            axios.post('http://94a65306.ngrok.io/api/login', this.state)
            .then((response) => {
                // SEND POST REQUEST FOR AUTHENTICATION
                localStorage.setItem('token', response.data.token);
                this.props.history.push("/");
            })
            .catch((error) => {
                console.log('Error: ' + error);
            });
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
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.handleChange} 
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="input-text settings-input marg-b-sm"
                />
                <button className="login-button button-shaded">Login</button>
            </form>
        );
    }
}

export default withRouter(LoginForm);