import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Pusher from 'pusher-js';
import NotificationBox from '../notifications/NotificationBox';
import ProfileDropdown from '../dropdowns/ProfileDropdown';
import { setUser } from '../../actions/admin';
import { closeNotificationBoxIsOpen, invertNotificationBoxIsOpen, closeProfileDropdownIsOpen, invertProfileDropdownIsOpen } from '../../actions/layout';
import { getUser } from '../../services/api/admin';
import { getUnreadMessagesTotal } from '../../services/api/inbox';
import { getNotifications } from '../../services/api/notifications';
import { WANT_URL } from '../../services/variables/variables';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import Headroom from 'react-headroom';

const navigationStyles = {
    navigationBar: {
        standard: {
            backgroundColor: 'rgb(88, 42, 114)'
        },
        special: {
            backgroundColor: 'rgb(219,112,147)'
        }
    },
    notificationIcon: {
        selected: {
            color: '#9775AA'
        },
        unselected: {
            color: '#FFF'
        }
    },
    profilePictureMini: {
        selected: {
            border: '1px solid #9775AA'
        },
        unselected: {
            border: '1px solid #FFF'
        }
    }
}

export class NavigationBar extends Component {
    constructor(props) {
        super(props);
        
        this.setNotificationDropdown = this.setNotificationDropdown.bind(this);
        this.setProfileDropdown = this.setProfileDropdown.bind(this);

        this.state = {
            notifications: [],
            unseen_count: null,
            notificationDropdownIsOpen: false,
            profileDropdownIsOpen: false
        }
    }

    componentDidMount() {
        getUser(this.props, () => {
            getNotifications((response) => {
                this.setState({
                    ...this.state,
                    notifications: response.data
                });
            });

            getUnreadMessagesTotal((response) => {
                this.setState({
                    ...this.state,
                    unseen_count: response
                });
            });
    
            const pusher = new Pusher('78565ef6078f239cd16c', {
                cluster: 'us2',
                encrypted: true,
                authEndpoint: `${WANT_URL}/broadcasting/auth`,
                auth: {
                    headers: { 
                        Accept: 'application/json', 
                        Authorization: `Bearer ${localStorage.getItem('token')}` 
                    }
                }      
            });
        
            const admin = JSON.parse(localStorage.getItem('user'));
            const channel = pusher.subscribe(`private-App.User.${admin.id}`);
            channel.bind("App\\Notifications\\NotifyMessageOwner", (data) => {
                console.log('Notification detected: ');
                console.log(data);
            });
    
            channel.bind('pusher:subscription_error', function(status) {
                console.log('pusher:subscription_error details: ');
                console.log(status);
            });
        });
    }

    setNotificationDropdown(value) {
        this.setState({
            ...this.state,
            notificationDropdownIsOpen: value,
            profileDropdownIsOpen: false
        });
    }

    setProfileDropdown(value) {
        this.setState({
            ...this.state,
            profileDropdownIsOpen: value,
            notificationBoxIsOpen: false
        });
    }

    render() {
        const { photo } = this.props;
        const { notifications, unseen_count, notificationDropdownIsOpen, profileDropdownIsOpen } = this.state;
        return (
            <div>
                <Headroom>
                <div 
                    className="navigation-bar"
                    style={navigationStyles.navigationBar.standard}
                >
                    <MediaQuery query="(min-width: 600px)">
                        <div className="navigation-bar__placeholder-box"></div>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 600px)">
                        <div className="navigation-bar__placeholder-box--mini">
                            <button
                                onClick={() => this.setNotificationDropdown(!notificationDropdownIsOpen)} 
                                className="button-icon marg-e"
                                id="icon-notification-button"
                            >
                                <i 
                                    className="icon-notification fas fa-bell marg-r-sm"
                                    style={notificationDropdownIsOpen ? navigationStyles.notificationIcon.selected : navigationStyles.notificationIcon.unselected}
                                    id="icon-notification"
                                ></i>
                            </button>
                            <Link to="/inbox" className="navigation-bar__mount link marg-r-sm">
                                <i className="icon-envelope fas fa-envelope"></i>
                                {(unseen_count != null && unseen_count != 0) &&
                                    <span className="navigation-bar__badge">
                                        {unseen_count}
                                    </span>
                                }
                            </Link>
                        </div>
                    </MediaQuery>
                    <div>
                        <Link 
                            to="/home"
                            className="navigation-link link"
                        >WANT</Link>
                    </div>
                    <div className="wrapper-flex wrapper-flex--center">
                        <MediaQuery query="(min-width: 600px)">
                            <button
                                onClick={() => this.setNotificationDropdown(!notificationDropdownIsOpen)} 
                                className="button-icon navigation-bar__mount marg-e marg-r-sm"
                                id="icon-notification-button"
                            >
                                <i 
                                    className="icon-notification navigation-bar__mount fas fa-bell"
                                    style={notificationDropdownIsOpen ? navigationStyles.notificationIcon.selected : navigationStyles.notificationIcon.unselected}
                                    id="icon-notification"
                                >
                                    {(notifications.length > 0) &&
                                        <span className="navigation-bar__badge">
                                            {notifications.length}
                                        </span>
                                    }
                                </i>
                            </button>
                            <Link to="/inbox" className="link marg-r-sm">
                                <i className="icon-envelope navigation-bar__mount fas fa-envelope">
                                    {(unseen_count != null && unseen_count != 0) &&
                                        <span className="navigation-bar__badge">
                                            {unseen_count}
                                        </span>
                                    }
                                </i>
                            </Link>
                        </MediaQuery>
                        <button className="button-icon marg-e">
                        {/* <Link to="/home" className="link"> */}
                            <i className="icon-tasks fas fa-th-list marg-r-xs"></i>
                        {/* </Link> */}
                        </button>
                        <button
                            onClick={() => this.setProfileDropdown(!profileDropdownIsOpen)} 
                            className="button-icon"
                            id="profile-picture--mini-button"
                        >
                            <img 
                                src={photo}
                                className="profile-picture--mini"
                                style={profileDropdownIsOpen ? navigationStyles.profilePictureMini.selected : navigationStyles.profilePictureMini.unselected}
                                id="profile-picture--mini"
                            />
                        </button>
                    </div>
                </div>
                {notificationDropdownIsOpen && <NotificationBox />}
                {profileDropdownIsOpen && <ProfileDropdown />}
                </Headroom>
            </div>
        );
    }
}

NavigationBar.propTypes = {
    photo: PropTypes.string,
    setUser: PropTypes.func.isRequired
}

const mapStateToProps = ({ admin }) => ({
    photo: admin.photo
});

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));