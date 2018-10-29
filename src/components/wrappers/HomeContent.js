import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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
        // Fetching data from backend in progress.
        axios.get('http://d571ba11.ngrok.io/api/want/show/2', { headers: { "Accept": "application/json" } })
            .then((response) => {
                console.log('Response: ' + response);
            })
            .catch((error) => {
                console.log('Error: ' + error);
            });
    }

    render() {
        const { wants } = this.props;
        return wants ? (
            <div className="home-content">
                <div className="home-content__left">
                    <Post />
                </div>
                <div className="home-content__middle">
                    <h4 className="home-content__heading">Wants around You</h4>
                    <Filter />
                    <Sort />
                    {wants.map((want) => (
                        <Want
                            isDetailsModal={false}
                            wantId={want.wantId}
                            firstName={want.firstName}
                            photo={want.photo}
                            timestamp={want.timestamp}
                            title={want.title}
                            pay={want.pay}
                            description={want.description} 
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
            // Content to display if feed cannot be loaded.
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

export default connect(mapStateToProps)(HomeContent);