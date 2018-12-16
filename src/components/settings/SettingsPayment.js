import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSettingsPaymentModalIsExpanded } from '../../actions/modal';

export class SettingsPayment extends Component {
    constructor(props) {
        super(props);

        this.onAddCardBtnPressed = this.onAddCardBtnPressed.bind(this);
        this.onRemoveCardBtnPressed = this.onRemoveCardBtnPressed.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            savedCards: this.props.savedCards
        }
    }

    onAddCardBtnPressed() {
        // TRIGGER ADD CARD MODAL
        this.props.openSettingsPaymentModalIsExpanded();
        console.log('Should trigger the add card modal');
    }

    onRemoveCardBtnPressed(id) {
        // REMOVE RESPECTIVE CARD
        console.log(`Should remove card with id of ${id}`);
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        // SEND POST REQUEST TO UPDATE PROFILE SETTINGS
        // IF SUCCESSFUL RESPONSE, UPDATE SETTINGS REDUCER WITH UPDATED INFO
    }

    render() {
        const { savedCards } = this.state;
        return (
            <div className="settings-edit-profile">
                <div className="settings-content">
                    <h4 className="content-heading">Saved Cards</h4>
                    <div className="settings-content__box wrapper-flex wrapper-flex--center">
                        {savedCards.map((card) => (
                            <div 
                                key={card.id}
                                className="settings-payment__card-box marg-r-sm"
                            >
                                <div className="settings-payment__card-box__detail">
                                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                                        <h4>XXXX XXXX XXXX</h4>
                                        <h4>{card.last4}</h4>
                                    </div>
                                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                                        <h4>{card.brand}</h4>
                                        <h4>{`${card.exp_month}/${String(card.exp_year).substring(2)}`}</h4>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => this.onRemoveCardBtnPressed(card.id)}
                                    className="button-simple"
                                >Remove</button>
                            </div>
                        ))}
                        <button
                            onClick={this.onAddCardBtnPressed} 
                            className="settings-payment__add-card-box"
                        >
                            Add a new card
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ settings }) => ({
    savedCards: settings.savedCards
});

const mapDispatchToProps = (dispatch) => ({
    openSettingsPaymentModalIsExpanded: () => dispatch(openSettingsPaymentModalIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPayment);