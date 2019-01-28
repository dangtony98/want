import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../navigation/NavigationBar';
import ProfileSummary from '../profile/ProfileSummary';
import ProfileStatistics from '../profile/ProfileStatistics';
import ProfileReviews from '../profile/ProfileReviews';
import Footer from '../footer/Footer';
import { getProfile } from '../../services/api/profile';
import PropTypes from 'prop-types';

export class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        getProfile(this.props.match.params.id, (response) => {
            this.setState({
                data: response.data
            })
        });
    }

    render() {
        console.log('state');
        console.log(this.state);
        const { data } = this.state;
        return data ? (
            <div className="profile-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <NavigationBar />
                <ProfileSummary summary={data.user[0]} />
                <div className="profile-bottom wrapper-flex">
                    <ProfileStatistics
                        rating={data.user[0].rating.current_rating} 
                        statistics={data.stats} 
                    />
                    <ProfileReviews reviews={data.review} />
                </div>
                <Footer />
            </div>
        ) : (
            <div>

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