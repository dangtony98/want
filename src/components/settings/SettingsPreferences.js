import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { changeSelectedPreference } from '../../actions/settings';
import { logout } from '../../services/api/authentication';
import PropTypes from 'prop-types';

// FINALIZE STYLING FOR THIS COMPONENT

const preferenceOptions = {
    EDIT_PROFILE: 'Edit Profile',
    PAYMENT: 'Payment',
    SECURITY: 'Security',
    LOGOUT: 'Logout'
}

const preferenceStyles = {
    box: {
        selected: {
            transition: 'all 0.2s'
        },
        unselected: {
            backgroundColor: '#FFF'
        }
    },
    btn: {
        selected: {
            color: '#582A72'
        },
        unselected: {
            color: '#7F8C8D'
        }
    }
}

const WANT_URL = 'https://dry-mesa-87903.herokuapp.com'

export class SettingsPreferences extends Component {
    constructor(props) {
        super(props);

        this.onPreferenceBtnPressed = this.onPreferenceBtnPressed.bind(this);
    }

    onPreferenceBtnPressed(value) {
        if (value == 'Logout') {
            logout(this.props);
        } else {
            this.props.changeSelectedPreference(value);
        }
    }

    render() {
        const { selectedPreference } = this.props;
        return (
            <div className="settings-preferences">
                <h4 className="content-heading">Preferences</h4>
                <div className="settings-preferences__box">
                    <div 
                        className="settings-preferences__preference"
                        style={selectedPreference == preferenceOptions.EDIT_PROFILE ? preferenceStyles.box.selected : preferenceStyles.box.unselected}
                    >
                        <button
                            onClick={() => this.onPreferenceBtnPressed('Edit Profile')}
                            className="settings-preferences__button button-simple marg-t-xs"
                            style={selectedPreference == preferenceOptions.EDIT_PROFILE ? preferenceStyles.btn.selected : preferenceStyles.btn.unselected}
                        >Edit Profile</button>
                    </div>
                    {[preferenceOptions.PAYMENT, preferenceOptions.SECURITY].map((title, index) => (
                        <div
                            className="settings-preferences__preference"
                            style={selectedPreference == title ? preferenceStyles.box.selected : preferenceStyles.box.unselected}
                            key={index}
                        >
                            <button
                                onClick={() => this.onPreferenceBtnPressed(title)} 
                                className="settings-preferences__button button-simple"
                                style={selectedPreference == title ? preferenceStyles.btn.selected : preferenceStyles.btn.unselected}
                            >{title}</button>
                        </div>
                    ))}
                    <div 
                        className="settings-preferences__preference"
                        style={selectedPreference == preferenceOptions.LOGOUT ? preferenceStyles.box.selected : preferenceStyles.box.unselected}
                    >
                        <button
                            onClick={() => this.onPreferenceBtnPressed('Logout')}
                            className="settings-preferences__button button-simple marg-b-xs"
                            style={selectedPreference == preferenceOptions.LOGOUT ? preferenceStyles.btn.selected : preferenceStyles.btn.unselected}
                        >Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}

SettingsPreferences.propTypes = {
    selectedPreference: PropTypes.string,
    changeSelectedPreference: PropTypes.func.isRequired
}

const mapStateToProps = ({ settings }) => ({
    selectedPreference: settings.selectedPreference
});

const mapDispatchToProps = (dispatch) => ({
    changeSelectedPreference: (preference) => dispatch(changeSelectedPreference(preference)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingsPreferences));