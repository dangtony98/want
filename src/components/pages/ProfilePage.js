import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar';
import ProfileSummary from '../profile/ProfileSummary';
import ProfileStatistics from '../profile/ProfileStatistics';
import ProfileReviews from '../profile/ProfileReviews';
import Footer from '../footer/Footer';
import { getProfile } from '../../services/api/profile';
import MediaQuery from 'react-responsive';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        getProfile(this.props.match.params.id, (response) => {
            console.log('profile: ');
            console.log(response.data);
            this.setState({
                data: response.data
            })
        });
    }

    render() {
        const { data } = this.state;
        return data ? (
            <div className="profile-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <NavigationBar />
                <div className="profile-content">
                    <div className="profile-content__middle">
                        <ProfileSummary summary={data.user[0]} />
                    </div>
                    <div className="profile-bottom wrapper-flex">
                        <MediaQuery query="(min-width: 900px)">
                            <ProfileStatistics
                                rating={data.user[0].rating.current_rating} 
                                statistics={data.stats} 
                            />
                        </MediaQuery>
                        <ProfileReviews 
                            reviews={data.review} 
                            statistics={data.stats}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        ) : (
            <div>

            </div>
        );
    }
}