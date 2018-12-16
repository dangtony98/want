import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalHandler from '../modal/ModalHandler';
import NavigationBar from '../navigation/NavigationBar';
import SettingsPreferences from '../settings/SettingsPreferences';
import SettingsContent from '../settings/SettingsContent';
import Footer from '../footer/footer';
import { changeSelectedPreference } from '../../actions/settings';

// FINALIZE PROPTYPES FOR THIS COMPONENT

export class SettingsPage extends Component {
    componentDidMount() {
        this.props.changeSelectedPreference('Edit Profile');
    }

    render() {
        return (
            <div className="settings-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <div>
                    <ModalHandler />
                    <NavigationBar />
                    <div className="settings-wrapper wrapper-flex wrapper-flex--top">
                        <SettingsPreferences />
                        <SettingsContent />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = ({ settings }) => ({
    selectedPreference: settings.selectedPreference
});

const mapDispatchProps = (dispatch) => ({
    changeSelectedPreference: (preference) => dispatch(changeSelectedPreference(preference))
});

export default connect(mapStateToProps, mapDispatchProps)(SettingsPage);