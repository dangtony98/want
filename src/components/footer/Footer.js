import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="footer marg-t-m">
        <div className="footer__box">
            <div className="footer__box--content">
                <div className="footer__column">
                    <h4 className="footer-heading">Brand</h4>
                    <h4><Link to="/about" className="footer-link link">About Us</Link></h4>
                    <h4><Link to="/team" className="footer-link link">Team</Link></h4>
                    <h4><Link to="/home" className="footer-link link">Contact Us</Link></h4>
                    <h4><Link to="/press" className="footer-link link">Press & Media</Link></h4>
                </div>
                <div className="footer__column">
                    <h4 className="footer-heading">Help</h4>
                    <h4><Link to="/wanters" className="footer-link link">Wanters</Link></h4>
                    <h4><Link to="/fulfillers" className="footer-link link">Fulfillers</Link></h4>
                    <h4><Link to="/home" className="footer-link link">FAQ</Link></h4>
                </div>
                <div className="footer__column">
                    <h4 className="footer-heading">Other</h4>
                    <h4><Link to="/home" className="footer-link link">Terms & Conditions</Link></h4>
                    <h4><Link to="/home" className="footer-link link">Privacy Policy</Link></h4>
                    <h4><Link to="/home" className="footer-link link">Report</Link></h4>
                </div>
            </div>
            <hr className="hr marg-t-sm marg-b-sm"></hr>
            <div className="wrapper-flex-spaced">
                <h4>&copy; 2019 Want</h4>
                <div className="wrapper-flex wrapper-flex--center">
                    <a 
                        href="https://www.facebook.com/" 
                        className="link marg-r-sm"
                    >
                        <i className="icon-facebook fab fa-facebook-square"></i>
                    </a>
                    <a 
                        href="https://www.instagram.com/"
                        className="link"
                    >
                        <i className="icon-instagram fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);