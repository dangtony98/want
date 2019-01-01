import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotificationBox from '../notifications/NotificationBox';
import { setUser } from '../../actions/admin';
import { closeNotificationBoxIsOpen, invertNotificationBoxIsOpen } from '../../actions/layout';
import { getUser } from '../../services/api/authentication';
import PropTypes from 'prop-types';

const navigationStyles = {
    notificationIcon: {
        selected: {
            color: '#9775AA'
        },
        unselected: {
            color: '#FFF'
        }
    }
}

export class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.onNotificationButtonPressed = this.onNotificationButtonPressed.bind(this);
    }

    componentDidMount() {
        this.props.closeNotificationBoxIsOpen();
        getUser(this.props);
    }

    onNotificationButtonPressed() {
        this.props.invertNotificationBoxIsOpen();
    }

    render() {
        const { photo, notificationBoxIsOpen } = this.props;
        return (
            <div>
                <div className="navigation-bar">
                    <div className="navigation-bar__placeholder-box">

                    </div>
                    <div>
                        <Link 
                            to="/"
                            className="navigation-link link"
                        >WANT</Link>
                    </div>
                    <div className="wrapper-flex wrapper-flex--center">
                        <button
                            onClick={this.onNotificationButtonPressed} 
                            className="button-icon"
                        >
                            <i 
                                className="icon-notification fas fa-bell marg-r-sm"
                                style={notificationBoxIsOpen ? navigationStyles.notificationIcon.selected : navigationStyles.notificationIcon.unselected}
                                id="icon-notification"
                            ></i>
                        </button>
                        <Link to="/settings">
                            <img 
                                src={photo}
                                className="profile-picture--mini"
                            />
                        </Link>
                    </div>
                </div>
                {notificationBoxIsOpen && <NotificationBox />}
            </div>
        );
    }
}

NavigationBar.propTypes = {
    photo: PropTypes.string,
    notificationBoxIsOpen: PropTypes.bool,
    closeNotificationBoxIsOpen: PropTypes.func.isRequired,
    invertNotificationBoxIsOpen: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

const mapStateToProps = ({ admin, layout }) => ({
    photo: admin.photo,
    notificationBoxIsOpen: layout.notificationBoxIsOpen
});

const mapDispatchToProps = (dispatch) => ({
    closeNotificationBoxIsOpen: () => dispatch(closeNotificationBoxIsOpen()),
    invertNotificationBoxIsOpen: () => dispatch(invertNotificationBoxIsOpen()),
    setUser: (user) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);