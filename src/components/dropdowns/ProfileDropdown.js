import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { logout } from '../../services/api/authentication';
import { closeProfileDropdownIsOpen } from '../../actions/layout';

const profileDropdownOptions = {
    PROFILE: 'Profile',
    SETTINGS: 'Settings',
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
        const { PROFILE, SETTINGS, LOGOUT } = profileDropdownOptions;
        switch (option) {
            case PROFILE:
                this.props.history.push('/');
                break;
            case SETTINGS:
                this.props.history.push('/settings');
                break;
            case LOGOUT:
                logout(this.props);
                break;
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && event.target.id != 'profile-picture--mini') {
            this.props.closeProfileDropdownIsOpen();
        }
    }

    render() {
        const { PROFILE, SETTINGS, LOGOUT } = profileDropdownOptions;
        const { email } = this.props;
        return (
            <div className="profile-dropdown" ref={this.setWrapperRef}>
                <div className="marg-b-sm">
                    <h4 className="profile-dropdown-text">Signed in as</h4>
                    <Link to="/" className="profile-dropdown-link link">
                        <h4>{email.substring(0, email.indexOf('@'))}</h4>
                    </Link>
                </div>
                <hr className="hr"></hr>

                {[PROFILE, SETTINGS, LOGOUT].map((option) => (
                    <button 
                        onClick={() => this.onButtonPressed(option)}
                        className="button-simple marg-t-sm"
                    >
                        <h4 className="profile-dropdown-text">{option}</h4>
                    </button>
                ))}
            </div>
        );
    }
}

const mapStateToProps = ({ admin }) => ({
    email: admin.email
});

const mapDispatchToProps = (dispatch) => ({
    closeProfileDropdownIsOpen: () => dispatch(closeProfileDropdownIsOpen())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown));