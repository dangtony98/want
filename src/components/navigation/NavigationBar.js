import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotificationBox from '../notifications/NotificationBox';
import { closeNotificationBoxIsOpen, invertNotificationBoxIsOpen } from '../../actions/layout';
import PropTypes from 'prop-types';
import image from '../../assets/sample-profile.png';

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
    }

    onNotificationButtonPressed() {
        this.props.invertNotificationBoxIsOpen();
    }

    render() {
        const { photo, notificationBoxIsOpen } = this.props;
        return (
            <div>
                <div className="navigation-bar">
                    <div>

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
    notificationBoxIsOpen: PropTypes.bool
}

const mapStateToProps = ({ admin, layout }) => ({
    photo: admin.photo,
    notificationBoxIsOpen: layout.notificationBoxIsOpen
});

const mapDispatchToProps = (dispatch) => ({
    closeNotificationBoxIsOpen: () => dispatch(closeNotificationBoxIsOpen()),
    invertNotificationBoxIsOpen: () => dispatch(invertNotificationBoxIsOpen())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);