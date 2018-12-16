import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsEditProfile from './SettingsEditProfile';
import SettingsPayment from './SettingsPayment';
import SettingsPrivacy from './SettingsPrivacy';

const settingsContentSwitch = (selectedPreference) => {
    switch (selectedPreference) {
        case 'Edit Profile':
            return (<SettingsEditProfile />);
        case 'Payment':
            return (<SettingsPayment />);
        case 'Privacy':
            return (<SettingsPrivacy />);
        default:
            return;
    }
}

const SettingsContent = ({ selectedPreference }) => (
    <div>
        {settingsContentSwitch(selectedPreference)}
    </div>
);

const mapStateToProps = ({ settings }) => ({
    selectedPreference: settings.selectedPreference
})

export default connect(mapStateToProps)(SettingsContent);