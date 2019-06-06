import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSettingsPaymentModalIsExpanded } from '../../actions/modal';
import { storeCards } from '../../actions/settings';
import { getCards, deleteCard } from '../../services/api/payment';

export class SettingsPayment extends Component {
    constructor(props) {
        super(props);

        this.onRemoveCardBtnPressed = this.onRemoveCardBtnPressed.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            savedCards: []
        }
    }

    componentDidMount() {
        getCards((response) => {
            this.props.storeCards(response.data.data);
            console.log(response);
        });
    }

    componentWillReceiveProps(nextProps) {
        const { cards } = nextProps;
        this.setState({
            ...this.state,
            savedCards: cards
        });
    }

    onRemoveCardBtnPressed(id) {
        deleteCard(id, () => {
            getCards((response) => {
                this.props.storeCards(response.data.data);
            });
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        // SEND POST REQUEST TO UPDATE PROFILE SETTINGS
        // IF SUCCESSFUL RESPONSE, UPDATE SETTINGS REDUCER WITH UPDATED INFO
    }

    render() {
        const { savedCards } = this.state;
        // CONSIDER REVISING DIV STRUCTURE TO CSS GRID LAYOUT
        return (
            <div className="settings-edit-profile">
                <div className="settings-content">
                    <h4 className="content-heading">Saved Cards</h4>
                    <div className="settings-content__box settings-payment__card-grid wrapper-flex wrapper-flex--center">
                        {savedCards.map((card) => (
                            <div 
                                key={card.id}
                                className="settings-payment__card-box"
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
                            onClick={() => this.props.openSettingsPaymentModalIsExpanded()} 
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
    cards: settings.cards
});

const mapDispatchToProps = (dispatch) => ({
    openSettingsPaymentModalIsExpanded: () => dispatch(openSettingsPaymentModalIsExpanded()),
    storeCards: (cards) => dispatch(storeCards(cards))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPayment);