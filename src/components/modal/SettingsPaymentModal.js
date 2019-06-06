import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { closeSettingsPaymentModalIsExpanded } from '../../actions/modal';
import { storeCards } from '../../actions/settings';
import { addCard, getCards } from '../../services/api/payment';

export class SettingsPaymentModal extends Component {
    constructor(props) {
        super(props);

        this.onSaveButtonPressed = this.onSaveButtonPressed.bind(this);
        this.onOutsideModalPressed = this.onOutsideModalPressed.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            name: '',
            card_no: '',
            ccExpiryMonth: '',
            ccExpiryYear: '',
            cvvNumber: ''
        }
    }  

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    onSaveButtonPressed() {
        const { card_no, ccExpiryMonth, ccExpiryYear, cvvNumber} = this.state;

        addCard({
            card_no,
            ccExpiryMonth,
            ccExpiryYear,
            cvvNumber
        }, (response) => {
            getCards((response) => {
                this.props.storeCards(response.data.data);
            });
            this.props.closeSettingsPaymentModalIsExpanded();
        });
    }

    onOutsideModalPressed() {
        this.props.closeSettingsPaymentModalIsExpanded();
        this.setState({
            name: '',
            card_no: '',
            ccExpiryMonth: '',
            ccExpiryYear: '',
            cvvNumber: ''
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onFormSubmit(e) {
        // SEND POST REQUEST TO UPDATE SAVED CARDS
        // IF SUCCESSFUL RESPONSE, CLOSE MODAL WITH UPDATED SAVED CARD
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { isOpen } = this.props;
        const { name, card_no, ccExpiryMonth, ccExpiryYear, cvvNumber } = this.state;

        return (
            <ReactModal
                isOpen={isOpen}
                className="settings-payment-modal"
                overlayClassName="modal-overlay"
                onRequestClose={this.onOutsideModalPressed}
            >
                <div className="settings-payment-modal">
                    <div className="settings-payment-modal__box wrapper-flex">
                        <form
                            onSubmit={this.onFormSubmit} 
                            className="settings-payment-modal__half-box"
                        >
                            <div className="wrapper-flex">
                                <i className="icon-credit-card fab fa-cc-visa marg-r-sm"></i>
                                <i className="icon-credit-card fab fa-cc-mastercard marg-r-sm"></i>
                                <i className="icon-credit-card fab fa-cc-amex marg-r-sm"></i>
                                <i className="icon-credit-card fab fa-cc-discover"></i>
                            </div>
                            <input
                                name="name"
                                value={name}
                                onChange={this.handleChange} 
                                type="text"
                                placeholder="Enter the cardholder's name"
                                autoComplete="off"
                                className="input-text settings-input marg-t-sm"
                            />
                            <input 
                                name="card_no"
                                value={card_no}
                                onChange={this.handleChange} 
                                type="text"
                                placeholder="Enter the card number"
                                autoComplete="off"
                                className="input-text settings-input marg-t-sm"
                            />
                            <div className="wrapper-flex">
                                <input 
                                    name="ccExpiryMonth"
                                    value={ccExpiryMonth}
                                    onChange={this.handleChange} 
                                    type="text"
                                    placeholder="MM"
                                    autoComplete="off"
                                    className="input-text settings-input marg-t-sm"
                                />
                                <input
                                    name="ccExpiryYear"
                                    value={ccExpiryYear} 
                                    onChange={this.handleChange} 
                                    type="text"
                                    placeholder="YYYY"
                                    autoComplete="off"
                                    className="input-text settings-input marg-t-sm marg-l-sm marg-r-sm"
                                />
                                <input
                                    name="cvvNumber"
                                    value={cvvNumber}
                                    onChange={this.handleChange} 
                                    type="text"
                                    placeholder="CVV"
                                    autoComplete="off"
                                    className="input-text settings-input marg-t-sm"
                                />
                            </div>
                            <div className="wrapper-flex-spaced marg-t-sm">
                                <div></div>
                                <div className="wrapper-flex">
                                    <button 
                                        onClick={this.onOutsideModalPressed}
                                        className="button-simple marg-r-sm"
                                    >Cancel</button>
                                    <button 
                                        onClick={this.onSaveButtonPressed}
                                        className="button-shaded"
                                    >Save</button>
                                </div>
                            </div>
                        </form>
                        <div className="settings-payment-modal__half-box">

                        </div>
                    </div>
                </div>
            </ReactModal>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeSettingsPaymentModalIsExpanded: () => dispatch(closeSettingsPaymentModalIsExpanded()),
    storeCards: (cards) => dispatch(storeCards(cards))
})

export default connect(null, mapDispatchToProps)(SettingsPaymentModal);