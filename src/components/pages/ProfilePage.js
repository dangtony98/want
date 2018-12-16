import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../navigation/NavigationBar';
import ProfileSummary from '../profile/ProfileSummary';
import ProfileStatistics from '../profile/ProfileStatistics';
import ProfileReviews from '../profile/ProfileReviews';
import Footer from '../footer/Footer';
import PropTypes from 'prop-types';

export class ProfilePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        const { summary, statistics, reviews } = this.props;
        return (
            <div className="profile-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <NavigationBar />
                <ProfileSummary summary={summary} />
                <div className="profile-bottom wrapper-flex">
                    <ProfileStatistics statistics={statistics} />
                    <ProfileReviews reviews={reviews} />
                </div>
                <Footer />
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