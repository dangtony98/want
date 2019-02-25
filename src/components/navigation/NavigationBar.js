import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import NotificationBox from '../notifications/NotificationBox';
import ProfileDropdown from '../dropdowns/ProfileDropdown';
import { setUser } from '../../actions/admin';
import { closeNotificationBoxIsOpen, invertNotificationBoxIsOpen, closeProfileDropdownIsOpen, invertProfileDropdownIsOpen } from '../../actions/layout';
import { getUser } from '../../services/api/admin';
import { getUnreadMessagesTotal } from '../../services/api/inbox';
import PropTypes from 'prop-types';

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

        this.onNotificationButtonPressed = this.onNotificationButtonPressed.bind(this);
        this.onProfileButtonPressed = this.onProfileButtonPressed.bind(this);

        this.state = {
            unseen_count: null
        }
    }

    componentDidMount() {
        this.props.closeNotificationBoxIsOpen();
        this.props.closeProfileDropdownIsOpen();
        getUser(this.props);
        getUnreadMessagesTotal((response) => {
            this.setState({
                ...this.state,
                unseen_count: response
            });
        });
    }

    onNotificationButtonPressed() {
        this.props.invertNotificationBoxIsOpen();
        this.props.closeProfileDropdownIsOpen();
    }

    onProfileButtonPressed() {
        this.props.invertProfileDropdownIsOpen();
        this.props.closeNotificationBoxIsOpen();
    }

    render() {
        const { photo, notificationBoxIsOpen, profileDropdownIsOpen } = this.props;
        return (
            <div>
                <div 
                    className="navigation-bar"
                    style={navigationStyles.navigationBar.standard}
                >
                    <div className="navigation-bar__placeholder-box">

                    </div>
                    <div>
                        <Link 
                            to="/home"
                            className="navigation-link link"
                        >WANT</Link>
                    </div>
                    <div className="wrapper-flex wrapper-flex--center">
                        <button
                            onClick={this.onNotificationButtonPressed} 
                            className="button-icon marg-e"
                            id="icon-notification-button"
                        >
                            <i 
                                className="icon-notification fas fa-bell marg-r-sm"
                                style={notificationBoxIsOpen ? navigationStyles.notificationIcon.selected : navigationStyles.notificationIcon.unselected}
                                id="icon-notification"
                            ></i>
                        </button>
                        <Link to="/inbox" className="link">
                            <i className="icon-envelope fas fa-envelope marg-r-sm"></i>
                        </Link>
                        <button className="button-icon marg-e">
                        <Link to="/home" className="link">
                            {/* <i class="icon-tasks fas fa-tasks marg-r-sm"></i> */}
                            <i class="icon-tasks fas fa-th-list marg-r-sm"></i>
                            {/* <i class="icon-tasks fas fa-list-ul marg-r-sm"></i> */}
                            {/* <i class="icon-tasks fas fa-list-alt marg-r-sm"></i> */}
                        </Link>
                        </button>
                        
                        <button
                            onClick={this.onProfileButtonPressed} 
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
                {notificationBoxIsOpen && <NotificationBox />}
                {profileDropdownIsOpen && <ProfileDropdown />}
            </div>
        );
    }
}

NavigationBar.propTypes = {
    photo: PropTypes.string,
    notificationBoxIsOpen: PropTypes.bool,
    profileDropdownIsOpen: PropTypes.bool,
    closeNotificationBoxIsOpen: PropTypes.func.isRequired,
    invertNotificationBoxIsOpen: PropTypes.func.isRequired,
    closeProfileDropdownIsOpen: PropTypes.func.isRequired,
    invertProfileDropdownIsOpen: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

const mapStateToProps = ({ admin, layout }) => ({
    photo: admin.photo,
    notificationBoxIsOpen: layout.notificationBoxIsOpen,
    profileDropdownIsOpen: layout.profileDropdownIsOpen
});

const mapDispatchToProps = (dispatch) => ({
    closeNotificationBoxIsOpen: () => dispatch(closeNotificationBoxIsOpen()),
    invertNotificationBoxIsOpen: () => dispatch(invertNotificationBoxIsOpen()),
    closeProfileDropdownIsOpen: () => dispatch(closeProfileDropdownIsOpen()),
    invertProfileDropdownIsOpen: () => dispatch(invertProfileDropdownIsOpen()),
    setUser: (user) => dispatch(setUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));