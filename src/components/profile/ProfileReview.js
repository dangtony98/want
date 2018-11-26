import React, { Component } from 'react';

export default class ProfileReview extends Component {
    constructor(props) {
        super(props);

        this.renderRating = this.renderRating.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    renderRating(rating) {
        let ratingArr = [];
        for (let i = 0; i < Math.round(rating); i++) {
            ratingArr.push(<i 
                className="icon-star fas fa-star"
                key={i}
            ></i>);
        }
        return ratingArr;
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { firstName, photo, timestamp, rating, title, review } = this.props.review;
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
                                {this.renderRating(rating)}
                            </div>
                        </div>
                    </div>
                    <h4 className="want__timestamp">{timestamp}</h4>
                </div>
                <h4 className="want__title">{title}</h4>
                <p className="profile-review__review">{this.applyCharacterLimit(review, 300)}</p>
            </div>
        );
    }
}