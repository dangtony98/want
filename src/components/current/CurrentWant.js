import React, { Component } from 'react';

export default class CurrentWant extends Component {
    constructor(props) {
        super(props);

        this.onMesssageBtnPressed = this.onMesssageBtnPressed.bind(this);
        this.onDetailsBtnPressed = this.onDetailsBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onMesssageBtnPressed() {

    }

    onDetailsBtnPressed() {

    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { isMatched, fulfiller, body } = this.props;
        if (this.props.fulfillerOptions) { const { fulfillerOptions } = this.props; }
        const currentWantStatusStyle = {
            backgroundColor: isMatched ? '#2ECC71' : '#BDC3C7'
        }
        return (
            <div className="current-want wrapper-flex wrapper-flex--top">
                <div className="current-want__content">
                    <h4 className="current-want__title">{this.applyCharacterLimit(body.title, 25)}</h4>
                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                        <h4 className="current-wants-text">Fulfiller: {fulfiller.firstName != null ? fulfiller.firstName : 'Undecided'}</h4>
                        <h4 className="current-wants-text">{`Offer: $${body.pay}`}</h4>
                    </div>
                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                        <div></div>
                        <div>
                            <button
                                onClick={this.onMesssageBtnPressed} 
                                className="button-simple"
                            >Message</button>
                            <button
                                onClick={this.onDetailsBtnPressed} 
                                className="current-want__details-button button-simple"
                            >Details</button>
                        </div>
                    </div>
                </div>
                <div 
                    style={currentWantStatusStyle}
                    className="current-want__status"
                ></div>
            </div>
        );
    }
}