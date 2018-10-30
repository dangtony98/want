import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export default class LoginBox extends Component {
    constructor(props) {
        super(props);

        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
        this.onFacebookBtnPressed = this.onFacebookBtnPressed.bind(this);
        this.onGoogleBtnPressed = this.onGoogleBtnPressed.bind(this);
    }
    
    onLoginFormSubmit(formContent) {
        console.log(formContent);
    }

    onFacebookBtnPressed() {

    }

    onGoogleBtnPressed() {

    }

    render() {
        return (
            <div className="login-box">
                <LoginForm onSubmit={this.onLoginFormSubmit} />
                <h4 className="login-text marg-t-m marg-b-sm">Or login with</h4>
                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center marg-b-m">
                        <div></div>
                        <div>
                            <button 
                                onClick={this.onFacebookBtnPressed}
                                className="button-icon marg-r-sm"
                            >
                                <i className="icon-facebook fab fa-facebook-square"></i>
                            </button>
                            <button
                                onClick={this.onGoogleBtnPressed}
                                className="button-icon"
                            >
                                <i className="icon-google fab fa-google"></i>
                            </button>
                        </div>
                        <div></div>
                    </div>
                <div>
                    <h4 className="login-text">Forgot <Link to="/" className="login-link link">password</Link>?</h4>
                    <h4 className="login-text">Don't have an account? <Link to="/signup" className="login-link link">Sign up</Link></h4>
                </div>
            </div>
        );
    }
}