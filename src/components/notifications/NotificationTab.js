import React, { Component } from 'react';
import { connect } from 'react-redux';
var moment = require('moment');

export class NotificationTab extends Component {
    constructor(props) {
        super(props);

        this.generateSubject = this.generateSubject.bind(this);
    }

    generateSubject() {

    }

    render() {
        const { photo, subject, date, link } = this.props;
        return (
            <div className="notification-tab notification-tab--border wrapper-flex wrapper-flex--center">
                <img 
                    src={photo}
                    className="notification-tab__image"
                />
                <div className="marg-l-sm">
                    <h4 className="notification-text">{subject}</h4>
                    <h4 className="notification-text">{moment(date).fromNow(true)}</h4>
                </div>
            </div>
        );
    }
}

export default connect()(NotificationTab);