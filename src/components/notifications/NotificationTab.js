import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IMAGE_URL, WANT_URL } from '../../services/variables/variables';

export default ({ notification }) => {
    console.log('NotificationTab: ');
    console.log(notification);
    const { data, created_at } = notification;
    const { user, verb, message } = data;

    const applyCharacterLimit = (description, limit) => {
        return `${description.substring(0, limit)}...`;
    }

    return (
        <div className="notification-tab notification-tab--border wrapper-flex wrapper-flex--center">
            <Link to={`/profile/${data.user.id}`}>
                <img
                    src={`${IMAGE_URL}/${data.user.avatar}`}
                    className="notification-tab__image"
                />
            </Link>
            <div className="marg-l-sm">
                <h4 className="notification-text">{`${user.first_name} ${verb} ${message}`}</h4>
                <h4 className="notification-text">{`${moment(created_at).fromNow(true)} ago`}</h4>
            </div>
        </div>
    )
}