import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedPreference } from '../../actions/settings';

// FINALIZE STYLING FOR THIS COMPONENT

const preferenceOptions = ['Payment', 'Privacy', 'Security'];

const preferenceStyles = {
    box: {
        selected: {
            // backgroundColor: 'rgba(151, 117, 170, 0.1)',
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
    }

    render() {
        const { selectedPreference } = this.props;
        return (
            <div className="settings-preferences">
                <h4 className="content-heading">Preferences</h4>
                <div className="settings-preferences__box">
                    <div 
                        className="settings-preferences__preference"
                        style={selectedPreference == 'Edit Profile' ? preferenceStyles.box.selected : preferenceStyles.box.unselected}
                    >
                        <button
                            onClick={() => this.onPreferenceBtnPressed('Edit Profile')}
                            className="settings-preferences__button button-simple marg-t-xs"
                            style={selectedPreference == 'Edit Profile' ? preferenceStyles.btn.selected : preferenceStyles.btn.unselected}
                        >Edit Profile</button>
                    </div>
                    {preferenceOptions.map((title, index) => (
                        <div
                            key={index} 
                            className="settings-preferences__preference"
                            style={selectedPreference == title ? preferenceStyles.box.selected : preferenceStyles.box.unselected}
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
                        style={selectedPreference == 'Logout' ? preferenceStyles.box.selected : preferenceStyles.box.unselected}
                    >
                        <button
                            onClick={() => this.onPreferenceBtnPressed('Logout')}
                            className="settings-preferences__button button-simple marg-b-xs"
                            style={selectedPreference == 'Logout' ? preferenceStyles.btn.selected : preferenceStyles.btn.unselected}
                        >Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ settings }) => ({
    selectedPreference: settings.selectedPreference
});

const mapDispatchToProps = (dispatch) => ({
    changeSelectedPreference: (preference) => dispatch(changeSelectedPreference(preference))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPreferences);