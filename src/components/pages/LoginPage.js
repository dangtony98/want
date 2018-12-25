import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginIllustration from '../login/LoginIllustration';
import LoginBox from '../login/LoginBox';
import { checkAuthentication } from '../../services/api/authentication';
import PropTypes from 'prop-types';

export class LoginPage extends Component {
    componentWillMount() {
        checkAuthentication(this.props, () => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className="login-page">
                <LoginIllustration />
                <LoginBox />
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(LoginPage);