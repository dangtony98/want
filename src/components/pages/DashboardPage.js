import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../navigation/NavigationBar';
import DashboardPreferences from '../dashboard/DashboardPreferences';
import DashboardWants from '../dashboard/DashboardWants';
import Footer from '../footer/Footer';
import { changeSelectedDashboard } from '../../actions/dashboard';

const dashboardContentSwitch = (selectedPreference) => {
    switch (selectedPreference) {
        case 'Wants':
            return;
        case 'Fulfillments':
            return;
        case 'Bookmarks':
            return;
        default:
            return null;
    }
}

export class DashboardPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="dashboard-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <div>
                    <NavigationBar />
                    <div className="dashboard-wrapper wrapper-flex wrapper-flex--top">
                        <DashboardPreferences />
                        <DashboardWants />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ dashboard }) => ({
    selectedDashboard: dashboard.selectedDashboard
});

const mapDispatchToProps = (dispatch) => ({
    changeSelectedDashboard: dispatch(changeSelectedDashboard())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);