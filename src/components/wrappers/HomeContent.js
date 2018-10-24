import React from 'react';
import { connect } from 'react-redux';
import Post from '../post/Post';
import Filter from '../narrow/Filter';
import Sort from '../narrow/Sort';
import Want from '../want/Want';
import CurrentWants from '../current/CurrentWants';
import CurrentFulfillments from '../current/CurrentFulfillments';

export const HomeContent = ({ wants }) => {
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

const mapStateToProps = ({ feed }) => ({
    wants: feed.wants
});

export default connect(mapStateToProps)(HomeContent);