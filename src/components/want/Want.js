import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openDetailsModalIsExpanded, closeDetailsModalIsExpanded, setDetailsModalWantId } from '../../actions/modal';
import PropTypes from 'prop-types';
import image from './sample-profile.png';

export class Want extends Component {
    constructor(props) {
        super(props);

        this.onAcceptBtnPressed = this.onAcceptBtnPressed.bind(this);
        this.onCounterOfferBtnPressed = this.onCounterOfferBtnPressed.bind(this);
        this.onDetailsBtnPressed = this.onDetailsBtnPressed.bind(this);
        this.onShareBtnPressed = this.onShareBtnPressed.bind(this);
        this.onCloseBtnPressed = this.onCloseBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onAcceptBtnPressed() {

    }

    onCounterOfferBtnPressed() {

    }

    onDetailsBtnPressed() {
        this.props.setDetailsModalWantId(this.props.wantId);
        this.props.openDetailsModalIsExpanded();
    }

    onShareBtnPressed() {

    }

    onCloseBtnPressed() {
        this.props.closeDetailsModalIsExpanded();
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { isDetailsModal, firstName, photo, timestamp, title, pay, description } = this.props;
        return (
            <div className={`want ${!isDetailsModal && 'marg-t-sm'}`}>
                <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                    <div className="wrapper-flex wrapper-flex--center marg-b-sm">
                        <img 
                            src={photo}
                            className="want__image"
                        ></img>
                        <div className="marg-l-sm">
                            <h4 className="want__firstName">{firstName}</h4>
                            <h4 className="want__timestamp">{timestamp}</h4>
                        </div>
                    </div>
                    {!isDetailsModal ? 
                        <button
                            onClick={this.onRenegotiationBtnPressed}
                            className="button-icon"
                        >
                            <i className="icon-share fas fa-share-alt"></i>
                        </button> :
                        <button
                            onClick={this.onCloseBtnPressed} 
                            className="button-icon">
                            <i className="icon-close fas fa-times"></i>
                        </button>
                    }
                </div>
                <h4 className="want__title">{title}</h4>
                <h4 className="want__pay">{`$${pay}`}</h4>
                <p className="want__description">
                    {!isDetailsModal ? this.applyCharacterLimit(description, 300) : description}
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
                    {!isDetailsModal && 
                        <button
                            onClick={this.onDetailsBtnPressed} 
                            className="want__accept-button button-simple"
                        >Details</button>
                    }
                </div>
            </div>
        );
    }
}

Want.propTypes = {
    firstName: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pay: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    openDetailsModalIsExpanded: PropTypes.func.isRequired,
    closeDetailsModalIsExpanded: PropTypes.func.isRequired,
    setDetailsModalWantId: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    openDetailsModalIsExpanded: () => dispatch(openDetailsModalIsExpanded()),
    closeDetailsModalIsExpanded: () => dispatch(closeDetailsModalIsExpanded()),
    setDetailsModalWantId: (wantId) => dispatch(setDetailsModalWantId(wantId))
});

export default connect(null, mapDispatchToProps)(Want);