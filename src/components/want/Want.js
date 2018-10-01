import React, { Component } from 'react';
import image from './sample-profile.png';

export default class Want extends Component {
    constructor(props) {
        super(props);

        this.onAcceptBtnPressed = this.onAcceptBtnPressed.bind(this);
        this.onDetailsBtnPressed = this.onDetailsBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onAcceptBtnPressed() {

    }

    onDetailsBtnPressed() {

    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { firstName, timestamp, title, pay, description} = this.props;
        return (
            <div className="want">
                <div className="wrapper-flex marg-b-sm">
                    <img 
                        src={image}
                        className="want__image"
                    ></img>
                    <div className="marg-l-sm">
                        <div>
                            <h4 className="want__firstName">{firstName}</h4>
                            <i class="icon-verified fas fa-check-circle"></i>
                        </div>
                        <h4 className="want__timestamp">{timestamp}</h4>
                    </div>
                </div>
                    <h4 className="want__title">{title}</h4>
                    <h4 className="want__pay">{`$${pay}`}</h4>
                <p className="want__description">
                    {this.applyCharacterLimit(description, 300)}
                </p>
                <div className="wrapper-flex-spaced">
                    <button
                        onClick={this.onAcceptBtnPressed} 
                        className="want__accept-button button-simple"
                    >Accept</button>
                    <button
                        onClick={this.onDetailsBtnPressed} 
                        className="want__accept-button button-simple"
                    >Details</button>
                </div>
            </div>
        );
    }
}