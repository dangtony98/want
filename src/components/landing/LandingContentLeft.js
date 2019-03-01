import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class LandingContentLeft extends Component {
    constructor(props) {
        super(props);

        this.onLoginBtnPressed = this.onLoginBtnPressed.bind(this);
    }

    onLoginBtnPressed() {
        this.props.history.push('/login');
    }

    render() {
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