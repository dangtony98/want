import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CurrentFulfillments extends Component {
    render() {
        return (
            <div>
                <h4 className="home-content__heading">Current Fulfillments</h4>
                <div className="current-fulfillments-box">
                    This is the CurrentFulfillments box.
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ current }) => ({
    currentFulfillments: current.currentFulfillments
});

export default connect(mapStateToProps)(CurrentFulfillments);