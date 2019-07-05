import React, { Component } from 'react';

export default class DashboardWants extends Component {
    render() {
        return (
            <div className="dashboard-wants">
                <div className="dashboard-content">
                    <h4 className="content-heading">Active Wants (0)</h4>
                    <div className="dashboard-content__box wrapper-flex wrapper-flex--center">
                        This is the Active Wants area.
                    </div>
                </div>
                <div className="dashboard-content">
                    <h4 className="content-heading">Posted Wants (0)</h4>
                    <div className="dashboard-content__box wrapper-flex wrapper-flex--center">
                        This is the Posted Wants area.
                    </div>
                </div>
            </div>
        );
    }
};