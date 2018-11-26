import React from 'react';
import ProfileReview from './ProfileReview';

export default ({ reviews }) => (
    <div className="profile-reviews">
        <h4 className="content-heading">Reviews</h4>
        <div className="profile-reviews__box">
            {reviews.map((review, index) => (
                <div>
                    <ProfileReview 
                        review={review} 
                        key={index} 
                    />
                    {reviews[index + 1] && <hr className="hr marg-l-sm marg-r-sm"></hr>}
                </div>
            ))}
        </div>
    </div>
);