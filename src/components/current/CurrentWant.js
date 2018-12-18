import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CurrentWant extends Component {
    constructor(props) {
        super(props);

        this.onEllipsisBtnPressed = this.onEllipsisBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onEllipsisBtnPressed() {
        console.log('Ellipsis Triggered in Current Want section.');
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { isMatched, fulfiller, body } = this.props;
        const circleStyle = { color: isMatched ? '#2ECC71' : '#7F8C8D' }
        return (
            <div className="current-want">
                <div className="current-want__content">
                    <div className="wrapper-flex-spaced">
                        <div className="wrapper-flex wrapper-flex--center">
                            <i
                                style={circleStyle} 
                                className="current-want__circle icon-circle fas fa-circle"
                            ></i>
                            <h4 className="current-want__title">{this.applyCharacterLimit(body.title, 25)}</h4>
                        </div>
                        <div className="wrapper-flex wrapper-flex--center">
                            <h4 className="current-wants-text">{`(-$${body.pay})`}</h4>
                            <button
                                onClick={this.onEllipsisBtnPressed}
                                className="button-icon marg-l-xs"
                            >
                                <i className="icon-ellipsis-h fas fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                    <h4 className="current-wants-text marg-l-sm">{fulfiller.firstName != null ? <span>By <Link to="/profile" className="link">{fulfiller.firstName}</Link></span> : <Link to="/profile" className="link">Select a Fulfiller</Link>}</h4>
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