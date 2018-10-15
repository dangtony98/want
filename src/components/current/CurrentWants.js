import React from 'react';
import { connect } from 'react-redux';
import CurrentWant from './CurrentWant';

export const CurrentWants = ({ currentWants }) => (
    <div>
        <h4 className="home-content__heading">Current Wants</h4>
        <div className="current-wants-box">
            {currentWants.map((currentWant) => (
                <CurrentWant {...currentWant} />
            ))}
        </div>
    </div>
);

const mapStateToProps = ({ current }) => ({
    currentWants: current.currentWants
});

export default connect(mapStateToProps)(CurrentWants);