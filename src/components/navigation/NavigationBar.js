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
        <div>
            <Link to="/">
                <img 
                    src={photo}
                    className="profile-picture--mini"
                ></img>
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