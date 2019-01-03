import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

export class NotificationTab extends Component {
    constructor(props) {
        super(props);

        this.generateSubject = this.generateSubject.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    generateSubject(notification) {
        const { link, firstName, title } = notification;
        let end;

        switch(notification.type) {
            case 'ACCEPTED_WANT':
                end = `accepted: ${this.applyCharacterLimit(title, 12)}`;
                break;
            case 'COUNTERED_WANT':
                end = `countered: ${this.applyCharacterLimit(title, 12)}`;
                break;
            case 'PAYMENT_REQUEST':
                end = `requests payment for: ${this.applyCharacterLimit(title, 4)}`;
                break;
            case 'ANNOUNCEMENT':
                end = 'issued an announcement';
                break 
            default:
                end = '';
                break;
        }

        return (
            <div>
                <Link to={link} target="_blank" className="link">{firstName}</Link> {end}
            </div>
        )
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { photo, timestamp } = this.props.notification;
        return (
            <div className="notification-tab notification-tab--border wrapper-flex wrapper-flex--center">
                <Link to="/profile">
                    <img
                        src={photo}
                        className="notification-tab__image"
                    />
                </Link>
                <div className="marg-l-sm">
                    <h4 className="notification-text">{this.generateSubject(this.props.notification)}</h4>
                    <h4 className="notification-text">{`${moment(timestamp).fromNow(true)} ago`}</h4>
                </div>
            </div>
        );
    }
}

export default connect()(NotificationTab);