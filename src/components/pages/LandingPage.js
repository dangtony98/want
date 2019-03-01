import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { checkAuthentication } from '../../services/api/authentication';
import LandingContentLeft from '../landing/LandingContentLeft';
import LandingContentRight from '../landing/LandingContentRight';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

export class LandingPage extends Component {
    componentDidMount() {
        checkAuthentication(() => {
            this.props.history.push('/home');
        }, () => {

        });
    }

    render() {
        return (
            <div className="landing-page">
                <div className="landing-content">
                    <LandingContentLeft />
                    <MediaQuery query="(min-width: 1200px)">
                        <LandingContentRight />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

LandingPage.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(LandingPage);