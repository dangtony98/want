import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';

export default ({ reply, admin, onDeleteReplyPressed }) => (
    <div className="want-reply-block wrapper-flex wrapper-flex--top">
        <Link to={`/profile/${reply.user.id}`} className="link">
            <img 
                src={`${IMAGE_URL}/${reply.user.avatar}`}
                className="profile-picture--mini marg-r-xs"
            />
        </Link>
        <div className="want-comment-block">
            <div className="want-comment">
                    {reply.body}
            </div>
            <div className="wrapper-flex wrapper-flex--center marg-t-xxs">
                <h5 className="want-text">
                    {`${moment(reply.created_at).fromNow(true)} ago`}
                </h5>
                {(admin && reply.user.id == admin.id) && (
                    <button
                        onClick={onDeleteReplyPressed}
                        className="button-icon marg-l-xs"
                    >
                        <i className="icon-trash fas fa-trash"></i>
                    </button>
                )}
            </div>
        </div>
    </div>
);