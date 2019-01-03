import React from 'react';
import PropTypes from 'prop-types';

export const ProfileReview = ({ firstName, photo, timestamp, rating, title, review }) => {
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
                        <h4 className="want__firstName">{firstName}</h4>
                        <div>
                            {renderRating(rating)}
                        </div>
                    </div>
                </div>
                <h4 className="want__timestamp">{timestamp}</h4>
            </div>
            <h4 className="want__title">{title}</h4>
            <p className="profile-review__review">{applyCharacterLimit(review, 300)}</p>
        </div>
    );
}

export default ProfileReview;

ProfileReview.propTypes = {
    firstName: PropTypes.string,
    photo: PropTypes.string,
    timestamp: PropTypes.string,
    rating: PropTypes.number,
    title: PropTypes.string,
    review: PropTypes.object
}