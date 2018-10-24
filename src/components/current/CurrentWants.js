import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentWant from './CurrentWant';

export const CurrentWants = ({ currentWants }) => (
    <div>
        <h4 className="home-content__heading">Current Wants</h4>
        <div className="current-wants-box">
            {currentWants.map((currentWant) => (
                <CurrentWant 
                    {...currentWant}
                    key={currentWant.uuid}
                />
            ))}
        </div>
    </div>
);

CurrentWants.propTypes = {
    currentWants: PropTypes.array
}

const mapStateToProps = ({ current }) => ({
    currentWants: current.currentWants
});

export default connect(mapStateToProps)(CurrentWants);