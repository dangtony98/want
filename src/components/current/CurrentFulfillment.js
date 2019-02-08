import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const tabStyle = (isMatched) => ({
    backgroundColor: isMatched ? '#fff' : 'rgba(189, 195, 199, 0.3)'
});

export default class CurrentFulfillment extends Component {
    constructor(props) {
        super(props);

        this.onCurrentFulfillmentPressed = this.onCurrentFulfillmentPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onCurrentFulfillmentPressed() {

    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { isMatched, wanter, body } = this.props;
        return (
            <div
                onClick={this.onCurrentFulfillmentPressed} 
                className="current-fulfillment"
                style={tabStyle(isMatched)}
            >
                <div className="current-fulfillment__content">
                    <h4 className="current-fulfillment__title">
                        {this.applyCharacterLimit(body.title, 40)}
                    </h4>
                    <h4 className="current-fulfillments-text">
                        For {wanter.firstName != null ? <Link to="/profile" target="_blank" className="current-link link">{wanter.firstName}</Link> : 'Undecided'}
                    </h4>
                </div>
            </div>
        );
    }
}

CurrentFulfillment.propTypes = {
    isMatched: PropTypes.bool.isRequired,
    wanter: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
}