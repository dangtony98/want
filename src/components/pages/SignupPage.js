import React from 'react';
import { Link } from 'react-router-dom';
import PromoBox from '../signup/PromoBox';
import SignupBox from '../signup/SignupBox';

export default () => (
    <div className="signup-page">
        <div className="signup-section">
            <Link 
                to="/" 
                className="signup-logo link"
            >WANT</Link>
        </div>
        <PromoBox />
        <div className="signup-section">
            <h4 className="signup-text marg-t-m">Already have an account? <Link to="/login" className="link">Login</Link></h4>
        </div>
    </div>
);