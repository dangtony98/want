import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProfileReview = ({ review }) => {
    const { firstName, photo, timestamp, rating, title, content } = review;

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
    
    const applyCharacterLimit = (description, limit) => {
        return `${description.substring(0, limit)}...`;
    }
    
    return (
        <div className="profile-review">
            <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                <div className="wrapper-flex wrapper-flex--center marg-b-sm">
                    <img
                        src={photo}
                        className="want__image"
                    />
                    <div className="wrapper-flex-spaced--flex1 marg-l-sm">
                        <h4 className="want-text marg-e">
                            <Link to="/profile" target="_blank" className="link">
                                {firstName}
                            </Link>
                        </h4>
                        <div>
                            {renderRating(rating)}
                        </div>
                    </div>
                </div>
                <h4 className="want-text marg-e">{timestamp}</h4>
            </div>
            <h3 className="want-text">{title}</h3>
            <p className="profile-review__review">{applyCharacterLimit(content, 300)}</p>
        </div>
    );
}

export default ProfileReview;

ProfileReview.propTypes = {
    review: PropTypes.object
}