import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationTab from './NotificationTab';
import { closeNotificationBoxIsOpen } from '../../actions/layout';
import PropTypes from 'prop-types';

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
        if (event.target.id == 'icon-notification-button') console.log('woo');
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

NotificationBox.propTypes = {
    notifications: PropTypes.array,
    closeNotificationBoxIsOpen: PropTypes.func.isRequired
}

const mapStateToProps = ({ notifications }) => ({
    notifications: notifications.notifications
});

const mapDispatchToProps = (dispatch) => ({
    closeNotificationBoxIsOpen: () => dispatch(closeNotificationBoxIsOpen())
});



export default connect(mapStateToProps, mapDispatchToProps)(NotificationBox);