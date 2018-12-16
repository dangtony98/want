import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../../assets/sample-profile.png';

export const NavigationBar = ({ photo }) => (
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
            <Link to="/">
                <button className="button-icon">
                    <i className="icon-notification fas fa-bell marg-r-sm"></i>
                </button>
            </Link>
            <Link to="/">
                <img 
                    src={photo}
                    className="profile-picture--mini"
                />
            </Link>
        </div>
    </div>
);

NavigationBar.propTypes = {
    photo: PropTypes.string
}

const mapStateToProps = ({ admin }) => ({
    photo: admin.photo
});

export default connect(mapStateToProps)(NavigationBar);