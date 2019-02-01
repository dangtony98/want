import React, { Component } from 'react';
import ProfileReview from './ProfileReview';
import { getReviews } from '../../services/api/profile';
import PropTypes from 'prop-types';

const paginationOptions = {
    PREV_PAGE: 'Prev Page',
    NEXT_PAGE: 'Next Page',
}

export default class ProfileReviews extends Component {
    constructor(props) {
        super(props);

        this.handlePagination = this.handlePagination.bind(this);

        this.state = {
            current_page: null,
            reviews: [],
            first_page_url: null,
            next_page_url: null,
            prev_page_url: null,
            total_reviews: null,
            per_page: null
        }
    }

    componentDidMount() {
        const { data, current_page, first_page_url, next_page_url, prev_page_url, per_page } = this.props.reviews;
        const { statistics } = this.props;

        this.setState({
            ...this.state,
            current_page: current_page,
            reviews: data,
            first_page_url: first_page_url,
            next_page_url: next_page_url,
            prev_page_url: prev_page_url,
            total_reviews: statistics.total_reviews,
            per_page: per_page
        });
    }

    handlePagination(paginationOption) {
        const { next_page_url, prev_page_url } = this.state;
        const { PREV_PAGE, NEXT_PAGE } = paginationOptions;
        if (paginationOption == PREV_PAGE) {
            getReviews(prev_page_url, (response) => {
                this.setState(() => ({
                    ...this.state,
                    current_page: response.data.review.current_page,
                    reviews: response.data.review.data,
                    first_page_url: response.data.review.first_page_url,
                    next_page_url: response.data.review.next_page_url,
                    prev_page_url: response.data.review.prev_page_url
                }));
            });
        } else if (paginationOption == NEXT_PAGE) {
            getReviews(next_page_url, (response) => {
                this.setState(() => ({
                    ...this.state,
                    current_page: response.data.review.current_page,
                    reviews: response.data.review.data,
                    first_page_url: response.data.review.first_page_url,
                    next_page_url: response.data.review.next_page_url,
                    prev_page_url: response.data.review.prev_page_url
                }));
            });
        }
    }

    render() {
        const { current_page, reviews, prev_page_url, next_page_url, total_reviews, per_page } = this.state;
        const { PREV_PAGE, NEXT_PAGE } = paginationOptions;
        return (
            <div className="profile-reviews">
                <h4 className="content-heading">{Math.ceil(total_reviews / per_page) != 0 ? `Reviews — Page ${current_page} of ${Math.ceil(total_reviews / per_page)}` : 'Reviews'}</h4>
                {reviews.length > 0 ? (
                    <div>
                        <div className="profile-reviews__box">
                            {reviews.map((review, index) => (
                                <div key={index}>
                                    <ProfileReview 
                                        review={review} 
                                    />
                                    {reviews[index + 1] && <hr className="hr marg-l-sm marg-r-sm"></hr>}
                                </div>
                            ))}
                        </div>
                        {(next_page_url || (next_page_url == null && prev_page_url)) &&
                            <div className="wrapper-flex-spaced marg-t-sm">
                                <div>
                                    {prev_page_url && 
                                        <button
                                            onClick={() => this.handlePagination(PREV_PAGE)} 
                                            className="button-simple"
                                        >Page {current_page - 1}</button>
                                    }
                                </div>
                                <div>
                                    {next_page_url && 
                                        <button
                                            onClick={() => this.handlePagination(NEXT_PAGE)} 
                                            className="button-simple"
                                        >Page {current_page + 1}</button>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                ) : (
                    <div className="profile-reviews__box--placeholder">
                        <h4 className="want-text">No reviews to show</h4>
                    </div>
                )}
                
            </div>
        );
    }
}

ProfileReviews.propTypes = {
    reviews: PropTypes.array,
    statistics: PropTypes.object
}