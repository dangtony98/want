import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../services/variables/variables';

const ProfileSummary = ({ summary }) => {
    const adminId = JSON.parse(localStorage.getItem('user')).id;
    const applyCharacterLimit = (description, limit) => (`${description.substring(0, limit)}${description.length > limit ? '...' : ''}`);
    return (
        <div className="profile-summary">
            <h4 className="content-heading">Profile Summary</h4>
            <div className="wrapper-flex">
                <img 
                    src={`${IMAGE_URL}/${summary.avatar}`} 
                    className="profile-summary__photo"
                />
                <div className="profile-summary__box">
                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                        <h2 className="profile-text">{summary.first_name}</h2>
                        {adminId == summary.id ? (
                            <Link to="/settings" className="link">
                                <i className="icon-user-edit fas fa-user-edit"></i>
                            </Link>
                        ) : (
                            <Link to="/inbox" className="link">
                                <i className="icon-comment-alt fas fa-comment-alt"></i>                            
                            </Link>
                        )}
                    </div>
                    <h4 className="profile-text marg-b-sm">{summary.tag_line}</h4>
                    {summary.description && 
                        <div>
                            <hr className="hr"></hr>
                            <p className="profile-text marg-t-sm">
                                {applyCharacterLimit(summary.description, 300)}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

ProfileSummary.propTypes = {
    summary: PropTypes.object
}

export default ProfileSummary;