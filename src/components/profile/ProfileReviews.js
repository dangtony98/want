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
            page: 1
        }
    }

    componentDidMount() {
        // GET FIRST PAGE REVIEWS
        const { page } = this.state;
        getReviews(page, () => {

        });
    }

    handlePagination(paginationOption) {
        const { page } = this.state;
        const { PREV_PAGE, NEXT_PAGE } = paginationOptions;
        if (paginationOption == PREV_PAGE) {
            // SEND POST REQUEST TO DECREMENT PAGE
            getReviews(page - 1, () => {
                this.setState((prevState) => ({
                    page: prevState.page - 1
                }));
            });
        } else if (paginationOption == NEXT_PAGE) {
            // SEND POST REQUEST TO INCREMENT PAGE
            getReviews(page + 1, () => {
                this.setState((prevState) => ({
                    page: prevState.page + 1
                }));
            });
        }
    }

    render() {
        const { reviews } = this.props;
        const { page } = this.state;
        const { PREV_PAGE, NEXT_PAGE } = paginationOptions;

        console.log('reviews.data: ');
        console.log(reviews.data);

        return (
            <div className="profile-reviews">
                <h4 className="content-heading">Reviews</h4>
                {reviews.data.length > 0 ? (
                    <div>
                        <div className="profile-reviews__box">
                            {reviews.data.map((review, index) => (
                                <div key={index}>
                                    <ProfileReview 
                                        review={review} 
                                    />
                                    {reviews.data[index + 1] && <hr className="hr marg-l-sm marg-r-sm"></hr>}
                                </div>
                            ))}
                        </div>
                        {reviews.next_page_url &&
                            <div className="wrapper-flex-spaced marg-t-sm">
                                <div>
                                    {page > 1 && 
                                        <button
                                            onClick={() => this.handlePagination(PREV_PAGE)} 
                                            className="button-simple"
                                        >Page {page - 1}</button>
                                    }
                                </div>
                                <div>
                                    {(page == 1 || page > 1) && 
                                        <button
                                            onClick={() => this.handlePagination(NEXT_PAGE)} 
                                            className="button-simple"
                                        >Page {page + 1}</button>
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
    reviews: PropTypes.array
}