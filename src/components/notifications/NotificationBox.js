import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationTab from './NotificationTab';
import { closeNotificationBoxIsOpen } from '../../actions/layout';

export class NotificationBox extends Component {
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
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.closeNotificationBoxIsOpen();
        }
    }
    
    render() {
        const { notifications } = this.props;
        return (
            <div className="notification-box" ref={this.setWrapperRef}>
                {notifications.map((notification, index) => {
                    const { photo, subject, date, link } = notification;
                    return (
                        <NotificationTab 
                            photo={photo}
                            subject={subject}
                            date={date}
                            link={link}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ notifications }) => ({
    notifications: notifications.notifications
});

const mapDispatchToProps = (dispatch) => ({
    closeNotificationBoxIsOpen: () => dispatch(closeNotificationBoxIsOpen())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBox);