import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { IMAGE_URL } from '../../services/variables/variables';
import PropTypes from 'prop-types';

export const ProfileReview = ({ review }) => {
    console.log('review');
    console.log(review);

    const renderRating = (rating) => {
        let ratingArr = [];
        for (let i = 0; i < 5; i++) {
            i < Math.round(rating) ? ratingArr.push(<i 
                className="icon-star fas fa-star"
                key={i}
            ></i>) : ratingArr.push(<i 
                className="icon-star far fa-star"
                key={i}
            ></i>);
        }
    
        return ratingArr;
    }
    
    const applyCharacterLimit = (description, limit) => (`${description.substring(0, limit)}${description.length > limit ? '...' : ''}`);

    return (
        <div className="profile-review">
            <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                <div className="wrapper-flex wrapper-flex--center marg-b-sm">
                    <img
                        src={`${IMAGE_URL}/${review.user.avatar}`}
                        className="want__image"
                    />
                    <div className="wrapper-flex-spaced--flex1 marg-l-sm">
                        <h4 className="want-text marg-e">
                            <Link to={`/profile/${review.user.id}`} target="_blank" className="profile-review-link link">
                                {review.user.first_name}
                            </Link>
                        </h4>
                        <div>
                            {renderRating(review.rating)}
                        </div>
                    </div>
                </div>
                <h4 className="want-text marg-e">{review.created_at ? moment(review.created_at).format('MMMM YYYY') : moment(review.user.created_at).format('MMMM YYYY')}</h4>
            </div>
            <h4 className="want-text marg-e">{review.want.title}</h4>
            <p className="profile-review__review">{applyCharacterLimit(review.feedback, 300)}</p>
        </div>
    );
}

export default ProfileReview;

ProfileReview.propTypes = {
    review: PropTypes.object
}