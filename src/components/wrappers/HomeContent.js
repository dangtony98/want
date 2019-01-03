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
import { getFeed } from '../../services/api/feed';
import PropTypes from 'prop-types';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        getFeed(this.props);
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
                    {wants != null ? wants.map((want) => (
                        <Want
                            detailsModalType="NONE"
                            {...want}
                            key={want.id}

                        />
                    )) : ''}
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