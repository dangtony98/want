import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentFulfillment from './CurrentFulfillment';

export const CurrentFulfillments = ({ currentFulfillments }) => (
    <div className="marg-t-sm">
        <h4 className="content-heading">Current Fulfillments</h4>
        <div className="current-fulfillments-box">
            {currentFulfillments.map((currentFulfillment, index) => (
                <CurrentFulfillment 
                    {...currentFulfillment} 
                    key={index}
                />
            ))}
        </div>
    </div>
);

CurrentFulfillments.propTypes = {
    currentFulfillments: PropTypes.array
}

const mapStateToProps = ({ current }) => ({
    currentFulfillments: current.currentFulfillments
});

export default connect(mapStateToProps)(CurrentFulfillments);