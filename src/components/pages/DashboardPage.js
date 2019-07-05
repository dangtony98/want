import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';
import { changeSelectedDashboard } from '../../actions/dashboard';

export class DashboardPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="dashboard-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <div>
                    <NavigationBar />
                    This is the Dashboard Page.
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