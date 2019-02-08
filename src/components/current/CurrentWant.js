import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const tabStyle = (isMatched) => ({
    backgroundColor: isMatched ? 'rgb(255, 255, 255)' : 'rgba(189, 195, 199, 0.3)'
});

export default class CurrentWant extends Component {
    constructor(props) {
        super(props);

        this.onCurrentWantPressed = this.onCurrentWantPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onCurrentWantPressed() {

    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { isMatched, fulfiller, body } = this.props;
        return (
            <div
                onClick={this.onCurrentWantPressed} 
                className="current-want"
                style={tabStyle(isMatched)}
            >
                <div className="current-want__content">
                    <h4 className="current-want__title">
                        {this.applyCharacterLimit(body.title, 40)}
                    </h4>
                    <h4 className="current-wants-text">{fulfiller.firstName != null ? <span>By <Link to="/profile" target="_blank" className="link">{fulfiller.firstName}</Link></span> : <Link to="/profile" className="current-link link">Select a Fulfiller</Link>}</h4>
                </div>
            </div>
        );
    }
}

CurrentWant.propTypes = {
    isMatched: PropTypes.bool.isRequired,
    fulfiller: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired
}