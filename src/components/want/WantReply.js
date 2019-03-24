import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';

export default ({ reply }) => (
    <div className="wrapper-flex wrapper-flex--top marg-t-xs">
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
                <h5 className="want-text marg-r-xs">
                    {moment(reply.created_at).fromNow(true)}
                </h5>
            </div>
        </div>
    </div>
);