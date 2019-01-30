import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { logout } from '../../services/api/authentication';
import { closeProfileDropdownIsOpen } from '../../actions/layout';
import PropTypes from 'prop-types';

const profileDropdownOptions = {
    PROFILE: 'Profile',
    FRIENDS: 'Friends',
    SETTINGS: 'Settings',
    HELP: 'Help',
    LOGOUT: 'Logout'
}

export class ProfileDropdown extends Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this);
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

    onButtonPressed(option) {
        const { PROFILE, FRIENDS, SETTINGS, HELP, LOGOUT } = profileDropdownOptions;
        switch (option) {
            case PROFILE:
                const adminId = JSON.parse(localStorage.getItem('user')).id;
                this.props.history.push(`/profile/${adminId}`);
                break;
            case FRIENDS:
                this.props.history.push('/home');
                break;
            case SETTINGS:
                this.props.history.push('/settings');
                break;
            case HELP:
                this.props.history.push('/wanters');
                break;
            case LOGOUT:
                logout(this.props);
                break;
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target.id != 'profile-picture--mini' && event.target.id != 'profile-picture--mini-button') {
            this.props.closeProfileDropdownIsOpen();
        }
    }

    render() {
        const { PROFILE, FRIENDS, SETTINGS, HELP, LOGOUT } = profileDropdownOptions;
        const { email } = this.props;
        return (
            <div className="profile-dropdown" ref={this.setWrapperRef}>
                <div className="marg-b-sm">
                    <h4 className="profile-dropdown-text">Signed in as</h4>
                    <Link to="/home" className="profile-dropdown-link link">
                        <h4>{email.substring(0, email.indexOf('@'))}</h4>
                    </Link>
                </div>
                <hr className="hr"></hr>
                {[PROFILE, FRIENDS, SETTINGS, HELP, LOGOUT].map((option, index) => (
                    <button 
                        onClick={() => this.onButtonPressed(option)}
                        className="button-simple marg-t-sm"
                        key={index}
                    >
                        <h4 className="profile-dropdown-text">{option}</h4>
                    </button>
                ))}
            </div>
        );
    }
}

ProfileDropdown.propTypes = {
    email: PropTypes.string,
    closeProfileDropdownIsOpen: PropTypes.func.isRequired
}

const mapStateToProps = ({ admin }) => ({
    email: admin.email
});

const mapDispatchToProps = (dispatch) => ({
    closeProfileDropdownIsOpen: () => dispatch(closeProfileDropdownIsOpen())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown));