import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';
import { createConvo } from '../../services/api/inbox';
import PropTypes from 'prop-types';

export class ProfileSummary extends Component {
    constructor(props) {
        super(props);

        this.onMessageButtonPressed = this.onMessageButtonPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onMessageButtonPressed() {
        console.log('onMessageButtonPressed()');
        const { summary } = this.props;
        createConvo({
            wanter_id: JSON.parse(localStorage.getItem('user')).id,
            fulfiller_id: summary.id,
            want_id: null
        }, () => {
            this.props.history.push('/inbox');
        });
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { summary } = this.props;
        const adminId = JSON.parse(localStorage.getItem('user')).id;
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
                                <button
                                    onClick={this.onMessageButtonPressed}
                                    className="button-icon"
                                >
                                    <i className="icon-comment-alt fas fa-comment-alt"></i>
                                </button>
                            )}
                        </div>
                        <h4 className="profile-text marg-b-sm">{summary.tag_line}</h4>
                        {summary.description && 
                            <div>
                                <hr className="hr"></hr>
                                <p className="profile-text marg-t-sm">
                                    {this.applyCharacterLimit(summary.description, 300)}
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

ProfileSummary.propTypes = {
    summary: PropTypes.object,
    history: PropTypes.object.isRequired
}

export default withRouter(ProfileSummary);