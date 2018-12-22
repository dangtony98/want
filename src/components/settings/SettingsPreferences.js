import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { changeSelectedPreference } from '../../actions/settings';
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

export class SettingsPreferences extends Component {
    constructor(props) {
        super(props);

        this.onPreferenceBtnPressed = this.onPreferenceBtnPressed.bind(this);
    }

    onPreferenceBtnPressed(value) {
        this.props.changeSelectedPreference(value);
        if (value == 'Logout') {
            console.log('AXX');
            console.log(localStorage.getItem('token'));
            axios.post('http://94a65306.ngrok.io/api/logout', 
            { 
                headers: { 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                }
            })
            .then((response) => {
                // SEND POST REQUEST FOR LOGOUT
                console.log('RESPONSE');
                console.log(response);
                localStorage.removeItem('token');
                this.props.history.push("/login");
            })
            .catch((error) => {
                console.log('Error: ' + error);
            });
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