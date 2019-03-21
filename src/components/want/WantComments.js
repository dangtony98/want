import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';

export default ({ comments }) => {
    return (
        <div>
            {comments.map((comment) => (
                <div 
                    key={comment.id}
                    className="wrapper-flex wrapper-flex--top marg-b-xs">
                    <Link to={`/profile/${comment.user.id}`} className="link">
                        <img 
                            src={`${IMAGE_URL}/${comment.user.avatar}`}
                            className="profile-picture--mini marg-r-sm"
                        />
                    </Link>
                    <div>
                        <div className="want-comment">
                                {comment.body}
                        </div>
                        <div className="wrapper-flex wrapper-flex--center marg-t-xxs">
                            <h5 className="want-text">{moment(comment.created_at).fromNow(true)}</h5>
                            <h5 className="link marg-l-xs">↳ Reply</h5>
                        </div>
                    </div>
                </div>    
            ))}
        </div>
    );
}
