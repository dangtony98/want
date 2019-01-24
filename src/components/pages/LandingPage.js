import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { checkAuthentication } from '../../services/api/authentication';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

export class LandingPage extends Component {
    constructor(props){
        super(props);

        this.onLoginBtnPressed = this.onLoginBtnPressed.bind(this);
    }

    componentWillMount() {
        checkAuthentication(() => {
            this.props.history.push('/home');
        }, () => {

        });
    }

    onLoginBtnPressed() {
        this.props.history.push('/login');
    }

    render() {
        const settings = {
            arrows: false,
            dots: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true
        } 

        return (
            <div className="landing-page">
                <div className="landing-content">
                    <div className="landing-content__left">
                        <Link 
                            to="/" 
                            className="navigation-link-dark link"
                        >
                            <h2>WANT</h2>
                        </Link>
                        <div className="landing-jumbotron">
                            <h1 className="landing-heading marg-b-sm">Your favorite service platform</h1>
                            <h2 className="landing-text">
                                Where people can request services that others can fulfill in exchange for money
                            </h2>
                        </div>
                        <h4 className="landing-text">&copy; 2019 Want, Inc.</h4>
                    </div>
                    <div className="landing-content__right">
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                            <div></div>
                            <div className="wrapper-flex wrapper-flex--center">
                                    <h4 className="landing-link marg-r-sm">
                                        <Link to="/signup" className="landing-link link">Sign up</Link>
                                    </h4>
                                    <button
                                        onClick={this.onLoginBtnPressed} 
                                        className="button-shaded button-shaded--invert"
                                    >Login</button>
                            </div>
                        </div>
                        <div className="landing-carousel">
                            <Slider {...settings}>
                                <div className="landing-carousel__tab">
                                    <h1 className="landing-heading landing-text--invert marg-t-sm">Simple</h1>
                                </div>
                                <div className="landing-carousel__tab">
                                    <h1 className="landing-heading landing-text--invert marg-t-sm">Safe</h1>
                                </div>
                                <div className="landing-carousel__tab">
                                    <h1 className="landing-heading landing-text--invert marg-t-sm">Flexible</h1>
                                </div>
                            </Slider>
                        </div>
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                            <div></div>
                            <div className="wrapper-flex wrapper-flex--center">
                                <a
                                    href="https://www.facebook.com/" 
                                    className="link marg-r-sm"
                                >
                                    <i className="icon-facebook icon-facebook--white icon-color-white fab fa-facebook-square"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="link"
                                >
                                    <i className="icon-instagram icon-instagram--white fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LandingPage.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(LandingPage);