import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedDashboard } from '../../actions/dashboard';

const preferenceOptions = {
    WANTS: 'Wants',
    FULFILLMENTS: 'Fulfillments',
    BOOKMARKS: 'Bookmarks'
}

export class DashboardPreferences extends Component {
    render() {
        const { WANTS, FULFILLMENTS, BOOKMARKS } = preferenceOptions;
        return (
            <div className="dashboard-preferences">
                <h4 className="content-heading">Dashboard</h4>
                <div className="dashboard-preferences__box">
                    {[WANTS, FULFILLMENTS, BOOKMARKS].map((title, index) => (
                        <div 
                            className="dashboard-preferences__preference"
                        >
                            <button
                                onClick={() => this.props.changeSelectedDashboard(title)}
                                className="dashboard-preferences__button button-simple"
                            >{title}</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ dashboard }) => ({
    selectedPreference: dashboard.selectedPreference
});

const mapDispatchToProps = (dispatch) => ({
    changeSelectedDashboard: (preference) => dispatch(changeSelectedDashboard(preference)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPreferences);