import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

export class LandingContentLeft extends Component {
    constructor(props) {
        super(props);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onLoginBtnPressed = this.onLoginBtnPressed.bind(this);

        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
    }

    onLoginBtnPressed() {
        this.props.history.push('/login');
    }

    render() {
        const { width, height } = this.state;
        return (
            <div className="landing-content__left">
                <Link 
                    to="/" 
                    className="navigation-link-dark link"
                >
                    <h2>WANT</h2>
                </Link>
                <div className="landing-jumbotron">
                    <h1 className="landing-heading marg-b-sm">
                        Your favorite service app
                    </h1>
                    <h2 className="landing-text">
                        Where people can request services that others can fulfill in exchange for money
                    </h2>
                    <MediaQuery query="(max-width: 1200px)">
                        <div className={`wrapper-flex ${width < 900 && 'wrapper-flex--around'} marg-t-m`}>
                            <div className="wrapper-flex wrapper-flex--center">
                                <h4 className="marg-r-sm">
                                    <Link to="/signup" className="link">Sign up</Link>
                                </h4>
                                <button
                                    onClick={this.onLoginBtnPressed} 
                                    className="button-shaded"
                                >Login</button>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
                <h4 className="landing-text">&copy; 2019 Want</h4>
            </div>
        );
    }
}

LandingContentLeft.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(LandingContentLeft);