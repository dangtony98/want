import React from 'react';
import PropTypes from 'prop-types';

const ProfileStatistics = ({ rating, statistics }) => (
    <div className="profile-statistics">
        <h4 className="content-heading">Statistics</h4>
        <div className="profile-statistics__box">
            <div className="profile-statistics__group marg-b-m">
                <h2 className="profile-statistics__measure">{rating}</h2>
                <h4>Rating</h4>
            </div>
            <div className="profile-statistics__group marg-b-m">
                <h2 className="profile-statistics__measure">{statistics.total_fulfilment}</h2>
                <h4>Fulfillments</h4>
            </div>
            <div className="profile-statistics__group">
                <h2 className="profile-statistics__measure">{statistics.total_reviews}</h2>
                <h4>Reviews</h4>
            </div>
        </div>
    </div>
);

ProfileStatistics.propTypes = {
    statistics: PropTypes.object
}

export default ProfileStatistics;