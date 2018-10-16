import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openDetailsModalIsExpanded } from '../../actions/modal';
import image from './sample-profile.png';

export class Want extends Component {
    constructor(props) {
        super(props);

        this.onAcceptBtnPressed = this.onAcceptBtnPressed.bind(this);
        this.onCounterOfferBtnPressed = this.onCounterOfferBtnPressed.bind(this);
        this.onDetailsBtnPressed = this.onDetailsBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onAcceptBtnPressed() {

    }

    onCounterOfferBtnPressed() {

    }

    onDetailsBtnPressed() {
        this.props.openDetailsModalIsExpanded();
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { firstName, timestamp, title, pay, description} = this.props;
        return (
            <div className="want">
                <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                    <div className="wrapper-flex wrapper-flex--center marg-b-sm">
                        <img 
                            src={image}
                            className="want__image"
                        ></img>
                        <div className="marg-l-sm">
                            <h4 className="want__firstName">{firstName}</h4>
                            <h4 className="want__timestamp">{timestamp}</h4>
                        </div>
                    </div>
                    <button
                            onClick={this.onRenegotiationBtnPressed}
                            className="button-icon"
                        >
                            <i class="icon-share fas fa-share-alt"></i>
                        </button>
                </div>
                <h4 className="want__title">{title}</h4>
                <h4 className="want__pay">{`$${pay}`}</h4>
                <p className="want__description">
                    {this.applyCharacterLimit(description, 300)}
                </p>
                <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                    <div>
                        <button
                            onClick={this.onAcceptBtnPressed} 
                            className="button-simple"
                        >Accept</button>
                        <button
                            onClick={this.onCounterOfferBtnPressed} 
                            className="want__counter-button button-simple"
                        >Counteroffer</button>
                    </div>
                    <button
                        onClick={this.onDetailsBtnPressed} 
                        className="want__accept-button button-simple"
                    >Details</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    openDetailsModalIsExpanded: () => dispatch(openDetailsModalIsExpanded())
});

export default connect(null, mapDispatchToProps)(Want);