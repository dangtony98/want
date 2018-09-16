import React, { Component } from 'react';
import image from './sample-profile.png';

export default class Want extends Component {
    constructor(props) {
        super(props);

        this.onAcceptBtnPressed = this.onAcceptBtnPressed.bind(this);
        this.onDetailsBtnPressed = this.onDetailsBtnPressed.bind(this);
    }

    onAcceptBtnPressed() {
        console.log(`Triggered ACCEPT for ${this.props.name}`);
    }

    onDetailsBtnPressed() {
        console.log(`Triggered DETAILS for ${this.props.name}`);
    }

    render() {
        const { name, timestamp, title, pay, description} = this.props;
        return (
            <div className="want">
                <div className="wrapper-flex marg-b-sm">
                    <img 
                        src={image}
                        className="want__profile-image"
                    ></img>
                    <div className="want__profile-detail">
                        <h4 className="want__name">{name}</h4>
                        <h4 className="want__timestamp">{timestamp}</h4>
                    </div>
                </div>
                    <h4 className="want__title">{title}</h4>
                    <h4 className="want__pay">{`$${pay}`}</h4>
                <p className="want__description">
                    {description}
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