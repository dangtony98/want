import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { openDetailsModalIsExpanded, closeDetailsModalIsExpanded, openAcceptModalIsExpanded, setModalWantId, setDetailsModalType } from '../../actions/modal';
import PropTypes from 'prop-types';

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
        this.props.setModalWantId(this.props.wantId);
        this.props.openAcceptModalIsExpanded();
    }

    onCounterOfferBtnPressed() {

    }

    onDetailsBtnPressed() {
        this.props.setModalWantId(this.props.wantId);
        this.props.setDetailsModalType('STANDARD');
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
        const { detailsModalType, firstName, photo, timestamp, title, pay, description } = this.props;
        
        // SAMPLE FULFILLER OPTIONS
        const fulfillerOptions = [{
            firstName: 'Daria',
            rating: 4.72,
            counterOffer: 7.5
        }, {
            firstName: 'Ethan',
            rating: 4.64,
            counterOffer: 6
        }, {
            firstName: 'Peter',
            rating: 4.31,
            counterOffer: 10
        }];
        
        console.log('detailsModalType from Want.js: ' + detailsModalType);
        return (
            <div className={`want ${detailsModalType == 'NONE' && 'marg-t-sm'}`}>
                <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                    <div className="wrapper-flex wrapper-flex--center marg-b-sm">
                        <Link to="/profile">
                            <img 
                                src={photo}
                                className="want__image"
                            />
                        </Link>
                        <div className="marg-l-sm">
                            <h4 className="want__firstName">
                                <Link to="/profile" target="_blank" className="link">{firstName}</Link>
                            </h4>
                            <h4 className="want__timestamp">{`${moment(timestamp).fromNow(true)} ago`}</h4>
                        </div>
                    </div>
                    { detailsModalType == 'NONE' ? 
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
                    {detailsModalType == 'NONE' ? this.applyCharacterLimit(description, 300) : description}
                </p>
                { (detailsModalType == 'NONE' || detailsModalType == 'STANDARD') && 
                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                        <div className="wrapper-flex">
                            <button
                                onClick={this.onAcceptBtnPressed} 
                                className="button-simple marg-t-sm"
                            >Accept</button>
                            <button
                                onClick={this.onCounterOfferBtnPressed} 
                                className="want__counter-button button-simple marg-t-sm"
                            >Counteroffer</button>
                        </div>
                        {detailsModalType == 'NONE' && 
                            <button
                                onClick={this.onDetailsBtnPressed} 
                                className="want__accept-button button-simple marg-t-sm"
                            >Details</button>
                        }
                    </div>
                }
                {detailsModalType == 'BIDDING' &&
                    fulfillerOptions.map((fulfiller) => (
                        <div>
                            {fulfiller.firstName}
                        </div>
                    ))
                }
            </div>
        );
    }
}

Want.propTypes = {
    firstName: PropTypes.string.isRequired,
    timestamp: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    pay: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    openDetailsModalIsExpanded: PropTypes.func.isRequired,
    closeDetailsModalIsExpanded: PropTypes.func.isRequired,
    openAcceptModalIsExpanded: PropTypes.func.isRequired,
    setModalWantId: PropTypes.func.isRequired,
    setDetailsModalType: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    openDetailsModalIsExpanded: () => dispatch(openDetailsModalIsExpanded()),
    closeDetailsModalIsExpanded: () => dispatch(closeDetailsModalIsExpanded()),
    openAcceptModalIsExpanded: () => dispatch(openAcceptModalIsExpanded()),
    setModalWantId: (wantId) => dispatch(setModalWantId(wantId)),
    setDetailsModalType: (modalType) => dispatch(setDetailsModalType(modalType))
});

export default connect(null, mapDispatchToProps)(Want);