import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalHandler from '../modal/ModalHandler';
import NavigationBar from '../navigation/NavigationBar';
import SettingsPreferences from '../settings/SettingsPreferences';
import SettingsEditProfile from '../settings/SettingsEditProfile';
import SettingsPayment from '../settings/SettingsPayment';
import SettingsSecurity from '../settings/SettingsSecurity';
import Footer from '../footer/footer';
import { changeSelectedPreference } from '../../actions/settings';
import PropTypes from 'prop-types';

// FINALIZE PROPTYPES FOR THIS COMPONENT
// CONSIDER DEFINING ENUMS FOR "SETTINGS CONTENT"

const settingsContentSwitch = (selectedPreference) => {
    switch (selectedPreference) {
        case 'Edit Profile':
            return (<SettingsEditProfile />);
        case 'Payment':
            return (<SettingsPayment />);
        case 'Security':
            return (<SettingsSecurity />);
        default:
            return null;
    }
}

export class SettingsPage extends Component {
    componentDidMount() {
        this.props.changeSelectedPreference('Edit Profile');
        window.scrollTo(0, 0);
    }

    render() {
        const { selectedPreference } = this.props;
        return (
            <div className="settings-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <div>
                    <ModalHandler />
                    <NavigationBar />
                    <div className="settings-wrapper wrapper-flex wrapper-flex--top">
                        <SettingsPreferences />
                        {settingsContentSwitch(selectedPreference)}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

SettingsPage.propTypes = {
    selectedPreference: PropTypes.string,
    changeSelectedPreference: PropTypes.func.isRequired
}

const mapStateToProps = ({ settings }) => ({
    selectedPreference: settings.selectedPreference
});

const mapDispatchProps = (dispatch) => ({
    changeSelectedPreference: (preference) => dispatch(changeSelectedPreference(preference))
});

export default connect(mapStateToProps, mapDispatchProps)(SettingsPage);