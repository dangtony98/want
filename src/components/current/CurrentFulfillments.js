import React from 'react';
import { connect } from 'react-redux';
import CurrentFulfillment from './CurrentFulfillment';

export const CurrentFulfillments = ({ currentFulfillments }) => (
    <div className="marg-t-sm">
        <h4 className="home-content__heading">Current Fulfillments</h4>
        <div className="current-fulfillments-box">
            {currentFulfillments.map((currentFulfillment, index) => (
                <CurrentFulfillment 
                    {...currentFulfillment} 
                    key={currentFulfillment.uuid}
                />
            ))}
        </div>
    </div>
);

const mapStateToProps = ({ current }) => ({
    currentFulfillments: current.currentFulfillments
});

export default connect(mapStateToProps)(CurrentFulfillments);