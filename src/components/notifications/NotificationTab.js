import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const notificationOptions = {
    ACCEPTED_WANT: 'Accepted Want',
    COUNTERED_WANT: 'Countered Want',
    PAYMENT_REQUEST: 'Payment Request',
    ANNOUNCEMENT: 'Announcement'
}

const NotificationTab = ({ notification }) => {
    const { photo, timestamp } = notification;

    const generateSubject = (notification) => {
        const { link, firstName, title } = notification;
        const { ACCEPTED_WANT, COUNTERED_WANT, PAYMENT_REQUEST, ANNOUNCEMENT } = notificationOptions;
        let end;

        switch(notification.type) {
            case ACCEPTED_WANT:
                end = `accepted: ${applyCharacterLimit(title, 12)}`;
                break;
            case COUNTERED_WANT:
                end = `countered: ${applyCharacterLimit(title, 12)}`;
                break;
            case PAYMENT_REQUEST:
                end = `requests payment for: ${applyCharacterLimit(title, 4)}`;
                break;
            case ANNOUNCEMENT:
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

    const applyCharacterLimit = (description, limit) => {
        return `${description.substring(0, limit)}...`;
    }

    return (
        <div className="notification-tab notification-tab--border wrapper-flex wrapper-flex--center">
            <Link to="/profile">
                <img
                    src={photo}
                    className="notification-tab__image"
                />
            </Link>
            <div className="marg-l-sm">
                <h4 className="notification-text">{generateSubject(notification)}</h4>
                <h4 className="notification-text">{`${moment(timestamp).fromNow(true)} ago`}</h4>
            </div>
        </div>
    )
}

NotificationTab.propTypes = {
    photo: PropTypes.string,
    timestamp: PropTypes.object
}

export default connect()(NotificationTab);