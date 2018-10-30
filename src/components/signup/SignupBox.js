import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';

export default class SignupBox extends Component {
    constructor(props) {
        super(props);

        this.onSignupFormSubmit = this.onSignupFormSubmit.bind(this);
    }

    onSignupFormSubmit(formContent) {
        console.log(formContent);
    }

    render() {
        return (
            <div className="signup-box">
                <SignupForm onSubmit={this.onSignupFormSubmit} />
                <p className="signup-text marg-t-sm">
                    Signing up signifies that you have read and agree to the 
                    <Link to="/" className="signup-link link"> Terms and Conditions </Link> 
                    and our 
                    <Link to="/" className="signup-link link"> Privacy Policy</Link>
                </p>
            </div>
        );
    }
}