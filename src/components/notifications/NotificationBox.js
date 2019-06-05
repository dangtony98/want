import React, { Component } from 'react';
import NotificationTab from './NotificationTab';
import { closeNotificationBoxIsOpen } from '../../actions/layout';
import PropTypes from 'prop-types';

export default class NotificationBox extends Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target.id != 'icon-notification' && event.target.id != 'icon-notification-button') {
            this.props.closeNotificationBoxIsOpen();
        }
    }
    
    render() {
        const { notifications } = this.props;
        return (
            <div className="notification-box" ref={this.setWrapperRef}>
                {notifications.map((notification, index) => {
                    return (
                        <NotificationTab 
                            notification={notification}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}