import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { InstantSearch, Hits, Configure, Highlight, connectHits } from 'react-instantsearch-dom';
import { updateFeed, addWants, setNextPageUrl, setHasMoreWants } from '../../actions/feed';
import Post from '../post/Post';
import Filter from '../narrow/Filter';
import Sort from '../narrow/Sort';
import Slider from '../slider/Slider';
import Want from '../want/Want';
import CurrentWants from '../current/CurrentWants';
import CurrentFulfillments from '../current/CurrentFulfillments';
import { getFeed } from '../../services/api/feed';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import PostWidget from '../widgets/PostWidget';
import PropTypes from 'prop-types';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
        
        this.handleLoadWants = this.handleLoadWants.bind(this);

        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        getFeed((response) => {
            this.props.updateFeed(response.data);
        });
    }

    handleLoadWants(page) {
        let next_page_url = this.props.next_page_url;
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
                this.props.addWants(response.data.data);
                if (response.data.next_page_url != null) {
                    this.props.setNextPageUrl(response.data.next_page_url);
                } else {
                    this.props.setHasMoreWants(false);
                }
            })
            .catch((error) => {
                // NEWSFEED RETRIEVAL UNSUCCESSFUL
                console.log('Error: ' + error);
            });
    }

    render() {
        const { wants, hasMoreWants, searchTerm } = this.props;
        let wantArr = [];
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
                <MediaQuery query="(max-width: 900px)">
                    <PostWidget />
                </MediaQuery>
                <MediaQuery query="(min-width: 900px)">
                    <div className="home-content__left">
                        <Post />
                    </div>
                </MediaQuery>
                <div className="home-content__middle marg-b-sm">
                    {/* <MediaQuery query="(max-width: 900px)">
                        <Post />
                    </MediaQuery> */}
                    <h4 className="content-heading">Newsfeed</h4>
                    <InstantSearch 
                        appId="F4OYFK126T"
                        apiKey="0b5b337016e53d122a72c477668057e5"
                        indexName="wants"
                    >
                        <Filter />
                        {searchTerm == '' ? (
                            <div>
                                <Sort />
                                <Slider />
                                <InfiniteScroll
                                    pageStart={0}
                                    loadMore={this.handleLoadWants}
                                    hasMore={hasMoreWants}
                                >   
                                    {wantArr}
                                </InfiniteScroll>
                            </div>
                        ) : (
                            <div>
                                <Configure hitsPerPage={5} />
                                <WantHits 
                                    className="marg-t-sm marg-b-sm"
                                />
                            </div>
                        )}
                    </InstantSearch>
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

const WantList = ({ hits }) => {
    return (
        <div>
            {hits.map((hit) => (
                <Want 
                    {...hit}
                    hit={hit}
                    key={hit.id}
                />
            ))}
        </div>
    );
}

const WantHits = connectHits(WantList);

HomeContent.propTypes = {
    wants: PropTypes.array,
    next_page_url: PropTypes.string,
    hasMoreWants: PropTypes.bool,
    updateFeed: PropTypes.func.isRequired,
    setNextPageUrl: PropTypes.func.isRequired,
    setHasMoreWants: PropTypes.func.isRequired,
    chosen: PropTypes.object.isRequired,
    searchTerm: PropTypes.string.isRequired
}

const mapStateToProps = ({ feed, filter }) => ({
    wants: feed.wants,
    next_page_url: feed.next_page_url,
    hasMoreWants: feed.hasMoreWants,
    chosen: filter.chosen,
    searchTerm: filter.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
    updateFeed: (feed) => dispatch(updateFeed(feed)),
    addWants: (want) => dispatch(addWants(want)),
    setNextPageUrl: (url) => dispatch(setNextPageUrl(url)),
    setHasMoreWants: (status) => dispatch(setHasMoreWants(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);