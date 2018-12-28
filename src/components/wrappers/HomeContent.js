import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateFeed } from '../../actions/feed';
import Post from '../post/Post';
import Filter from '../narrow/Filter';
import Sort from '../narrow/Sort';
import Want from '../want/Want';
import CurrentWants from '../current/CurrentWants';
import CurrentFulfillments from '../current/CurrentFulfillments';
import PropTypes from 'prop-types';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        // TEST GET REQUEST
        // axios.get('http://94a65306.ngrok.io/api/want/show/1')
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log('Error: ' + error);
        //     });
    }

    render() {
        const { wants } = this.props;
        return wants ? (
            <div className="home-content">
                <div className="home-content__left">
                    <Post />
                </div>
                <div className="home-content__middle">
                    <h4 className="content-heading">Wants around You</h4>
                    <Filter />
                    <Sort />
                    {wants.map((want) => (
                        <Want
                            detailsModalType="NONE"
                            {...want}
                            // wantId={want.wantId}
                            // firstName={want.firstName}
                            // photo={want.photo}
                            // timestamp={want.timestamp}
                            // title={want.title}
                            // pay={want.pay}
                            // description={want.description} 
                            key={want.wantId}
                        />
                    ))}
                </div>
                <div className="home-content__right">
                    <CurrentWants />
                    <CurrentFulfillments />
                </div>
            </div>
        ) : (
            // CONTENT TO DISPLAY IF FEED CANNOT BE LOADED
            <div></div>
        )
    }
}

HomeContent.propTypes = {
    wants: PropTypes.array
}

const mapStateToProps = ({ feed }) => ({
    wants: feed.wants
});

const mapDispatchToProps = (dispatch) => ({
    updateFeed: (feed) => dispatch(updateFeed(feed))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);