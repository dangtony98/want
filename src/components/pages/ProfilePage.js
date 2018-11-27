import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../navigation/NavigationBar';
import ProfileSummary from '../profile/ProfileSummary';
import ProfileStatistics from '../profile/ProfileStatistics';
import ProfileReviews from '../profile/ProfileReviews';
import PropTypes from 'prop-types';

export class ProfilePage extends Component {
    render() {
        const { summary, statistics, reviews } = this.props;
        return (
            <div className="profile-page">
                <NavigationBar />
                <ProfileSummary summary={summary} />
                <div className="profile-bottom wrapper-flex">
                    <ProfileStatistics statistics={statistics} />
                    <ProfileReviews reviews={reviews} />
                </div>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    summary: PropTypes.object.isRequired,
    statistics: PropTypes.object.isRequired,
    reviews: PropTypes.array
}

const mapStateToProps = ({ profile }) => ({
    summary: profile.summary,
    statistics: profile.statistics,
    reviews: profile.reviews
});

export default connect(mapStateToProps)(ProfilePage);