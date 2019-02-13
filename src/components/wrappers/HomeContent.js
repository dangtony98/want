import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { updateFeed, setNextPageUrl, setHasMoreWants } from '../../actions/feed';
import Post from '../post/Post';
import Filter from '../narrow/Filter';
import Sort from '../narrow/Sort';
import Want from '../want/Want';
import CurrentWants from '../current/CurrentWants';
import CurrentFulfillments from '../current/CurrentFulfillments';
import { getFeed } from '../../services/api/feed';
import PropTypes from 'prop-types';
import axios from 'axios';

import { BarLoader } from 'react-spinners';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
        
        this.handleLoadWants = this.handleLoadWants.bind(this);
    }

    componentDidMount() {
        getFeed(this.props);
    }

    handleLoadWants(page) {
        let next_page_url = this.props.next_page_url;
        console.log('handleLoadWants() method init');
        console.log('next_page_url: ' + next_page_url);
        console.log('hasMoreWants: ' + this.props.hasMoreWants);
        axios.post(next_page_url, 
            { 
                categories: [this.props.chosen.categories.value == 0 ? '' : this.props.chosen.categories.value], 
                sort_by: this.props.chosen.sort_by.value
            },
            { 
                headers: { 
                    Accept: 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }
            })
            .then((response) => {
                // NEWSFEED RETRIEVAL SUCCESSFUL
                console.log('handleLoadWants() from HomeContent response is: ');
                console.log(response);
                console.log(response.data.next_page_url);
                let wants = this.props.wants;
                response.data.data.map((want) => {
                    wants.push(want);
                });
                
                // UPDATE WANT LIST?
                if (response.data.next_page_url != null) {
                    this.props.setNextPageUrl(response.data.next_page_url);
                } else {
                    console.log('setHasMoreWants to false');
                    // this.props.setHasMoreWants(false);
                }
            })
            .catch((error) => {
                // NEWSFEED RETRIEVAL UNSUCCESSFUL
                console.log('Error: ' + error);
            });
    }

    render() {
        const { wants, hasMoreWants } = this.props;
        let wantArr = [];
        console.log('wants from render: ');
        console.log(wants);
        wants.map((want) => {
            wantArr.push(
                <Want
                    {...want}
                    key={want.id}
                />
            )
        });

        return wants ? (
            <div className="home-content">
                <div className="home-content__left">
                    <Post />
                </div>
                <div className="home-content__middle marg-b-sm">
                    <h4 className="content-heading">Wants around You</h4>
                    <Filter />
                    <Sort />
                    
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.handleLoadWants}
                        hasMore={hasMoreWants}
                    >   
                        {wantArr}
                    </InfiniteScroll>
                </div>
                {/* <div className="home-content__right">
                    <CurrentWants />
                    <CurrentFulfillments />
                </div> */}
            </div>
        ) : (
            // CONTENT TO DISPLAY IF FEED CANNOT BE LOADED
            <div></div>
        )
    }
}

HomeContent.propTypes = {
    wants: PropTypes.array,
    next_page_url: PropTypes.string,
    hasMoreWants: PropTypes.bool,
    updateFeed: PropTypes.func.isRequired,
    setNextPageUrl: PropTypes.func.isRequired,
    setHasMoreWants: PropTypes.func.isRequired,
    chosen: PropTypes.object.isRequired
}

const mapStateToProps = ({ feed, filter }) => ({
    wants: feed.wants,
    next_page_url: feed.next_page_url,
    hasMoreWants: feed.hasMoreWants,
    chosen: filter.chosen
});

const mapDispatchToProps = (dispatch) => ({
    updateFeed: (feed) => dispatch(updateFeed(feed)),
    setNextPageUrl: (url) => dispatch(setNextPageUrl(url)),
    setHasMoreWants: (status) => dispatch(setHasMoreWants(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);