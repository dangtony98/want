import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { closeSettingsPaymentModalIsExpanded } from '../../actions/modal';
import { runInThisContext } from 'vm';

export class SettingsPaymentModal extends Component {
    constructor(props) {
        super(props);

        this.onSaveButtonPressed = this.onSaveButtonPressed.bind(this);
        this.onOutsideModalPressed = this.onOutsideModalPressed.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            name: '',
            cardNumber: '',
            month: '',
            year: '',
            cvv: ''
        }
    }  

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    onSaveButtonPressed() {
        console.log('Save button pressed!');
    }

    onOutsideModalPressed() {
        this.props.closeSettingsPaymentModalIsExpanded();
        this.setState({
            name: '',
            cardNumber: '',
            month: '',
            year: '',
            cvv: ''
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
        const { name, cardNumber, month, year, cvv } = this.state;

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
                                name="cardNumber"
                                value={cardNumber}
                                onChange={this.handleChange} 
                                type="text"
                                placeholder="Enter the card number"
                                autoComplete="off"
                                className="input-text settings-input marg-t-sm"
                            />
                            <div className="wrapper-flex">
                                <input 
                                    name="month"
                                    value={month}
                                    onChange={this.handleChange} 
                                    type="text"
                                    placeholder="MM"
                                    autoComplete="off"
                                    className="input-text settings-input marg-t-sm"
                                />
                                <input
                                    name="year"
                                    value={year} 
                                    onChange={this.handleChange} 
                                    type="text"
                                    placeholder="YYYY"
                                    autoComplete="off"
                                    className="input-text settings-input marg-t-sm marg-l-sm marg-r-sm"
                                />
                                <input
                                    name="cvv"
                                    value={cvv}
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
    closeSettingsPaymentModalIsExpanded: () => dispatch(closeSettingsPaymentModalIsExpanded())
})

export default connect(null, mapDispatchToProps)(SettingsPaymentModal);