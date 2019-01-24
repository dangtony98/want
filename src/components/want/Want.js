import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openDetailsModalIsExpanded, closeDetailsModalIsExpanded, openAcceptModalIsExpanded, setModalWantId, setDetailsModalType } from '../../actions/modal';
import { getUser } from '../../services/api/profile';
import { deleteWant } from '../../services/api/want';
import { updateFeed } from '../../actions/feed';
import { getFeed } from '../../services/api/feed';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../services/variables/variables';
import moment from 'moment';
import numeral from 'numeral';

const wantStyles = {
    self: {
        // border: '1px solid rgb(88, 42, 114)'
    },
    other: {
        // border: '1px solid rgb(189,195,199)'
    }
}

export class Want extends Component {
    constructor(props) {
        super(props);

        this.onProfileBtnPressed = this.onProfileBtnPressed.bind(this);
        this.onAcceptBtnPressed = this.onAcceptBtnPressed.bind(this);
        this.onDeleteButtonPressed = this.onDeleteButtonPressed.bind(this);
        this.onCounterOfferBtnPressed = this.onCounterOfferBtnPressed.bind(this);
        this.onDetailsBtnPressed = this.onDetailsBtnPressed.bind(this);
        this.onShareBtnPressed = this.onShareBtnPressed.bind(this);
        this.onCloseBtnPressed = this.onCloseBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);

        this.state = {
            copiedAnimation: false
        }
    }

    onProfileBtnPressed(userId) {
        // SEND POST REQUEST TO RETRIEVE THE REQUESTED USER'S PROFILE INFORMATION
        console.log('onProfileBtnPressed() triggered for user: ' + userId);
        getUser(userId);
    }

    onAcceptBtnPressed() {
        this.props.setModalWantId(this.props.wantId);
        this.props.openAcceptModalIsExpanded();
    }

    onDeleteButtonPressed(id) {
        deleteWant(id, () => {
            getFeed(this.props);
        });
    }

    onCounterOfferBtnPressed() {

    }

    onDetailsBtnPressed() {
        this.props.setModalWantId(this.props.wantId);
        this.props.setDetailsModalType('STANDARD');
        this.props.openDetailsModalIsExpanded();
    }

    onShareBtnPressed() {
        // TRIGGER SHARE ANIMATION
        if (!this.state.copiedAnimation) {
            this.setState({ copiedAnimation: true }, () => {
                window.setTimeout(() => {
                    this.setState({
                        copiedAnimation: false
                    });
                }, 900);
            });
        }
    }

    onCloseBtnPressed() {
        this.props.closeDetailsModalIsExpanded();
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { detailsModalType, categories, category_id, cost, created_at, description, admin_id, title, user, id} = this.props;
        const { copiedAnimation } = this.state;
        
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
        
        return (
            <div 
                className={`want ${detailsModalType == 'NONE' && 'want--feed marg-t-sm'}`}
                style={(detailsModalType == 'NONE' && admin_id == user.id) ? wantStyles.self : wantStyles.other}
            >
                <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                    <div className="wrapper-flex wrapper-flex--center">
                        <Link to="/profile" target="_blank" className="link">
                            <img 
                                src={`${IMAGE_URL}/${user.avatar}`}
                                className="want__image"
                            />
                        </Link>
                        <div className="marg-l-sm">
                            <h4 className="want-text marg-e">
                                <Link to="/profile" target="_blank" className="want-link link">
                                    {user.first_name}
                                </Link>
                                {/* <button
                                    onClick={() => this.onProfileBtnPressed(userId)} 
                                    className="button-simple"
                                >{firstName}</button> */}
                            </h4>
                            <h4 className="want-text marg-e">{`${moment(created_at).fromNow(true)} ago`}</h4>
                        </div>
                    </div>
                    {detailsModalType == 'NONE' ? 
                        <div className="wrapper-flex wrapper-flex--center">
                            <div>
                                {copiedAnimation && <div className="want-copied">Copied</div>}
                            </div>
                            <button
                                onClick={this.onShareBtnPressed}
                                className="button-icon"
                            >
                                <i className="icon-share fas fa-share-alt"></i>
                            </button>
                        </div>
                         :
                        <button
                            onClick={this.onCloseBtnPressed} 
                            className="button-icon">
                            <i className="icon-close fas fa-times"></i>
                        </button>
                    }
                </div>
                <h4 className="want-text marg-t-sm marg-b-xs">{title}</h4>
                <h4 className="want__pay">{numeral(cost / 100).format('$0,0.00')}</h4>
                <h4 className="want-text marg-t-xs marg-b-xs">
                    {categories.map((category) => (category.value == category_id ? category.label : ''))}
                </h4>                
                <p className="want-text">
                    {detailsModalType == 'NONE' ? this.applyCharacterLimit(description, 200) : description}
                </p>
                {(detailsModalType == 'NONE' || detailsModalType == 'STANDARD') && 
                    <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                        <div className="wrapper-flex">
                            <button
                                onClick={this.onAcceptBtnPressed} 
                                className="button-simple marg-t-sm"
                            >{(detailsModalType == 'NONE' && admin_id == user.id) ? 'Edit' : 'Accept'}</button>
                            {(detailsModalType == 'NONE' && admin_id == user.id) ? 
                                (<button
                                    onClick={() => this.onDeleteButtonPressed(id)} 
                                    className="want__counter-button button-simple marg-t-sm"
                                >Delete</button>) : 
                                (<button
                                onClick={this.onCounterOfferBtnPressed} 
                                className="want__counter-button button-simple marg-t-sm"
                                >Counteroffer</button>)
                            }
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
    admin_id: PropTypes.number,
    detailsModalType: PropTypes.string,
    category_id: PropTypes.number,
    cost: PropTypes.number,
    created_at: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.object,
    openDetailsModalIsExpanded: PropTypes.func.isRequired,
    closeDetailsModalIsExpanded: PropTypes.func.isRequired,
    openAcceptModalIsExpanded: PropTypes.func.isRequired,
    setModalWantId: PropTypes.func.isRequired,
    setDetailsModalType: PropTypes.func.isRequired,
    updateFeed: PropTypes.func.isRequired
}

const mapStateToProps = ({ admin, filter }) => ({
    admin_id: admin.id,
    categories: filter.categories
});

const mapDispatchToProps = (dispatch) => ({
    openDetailsModalIsExpanded: () => dispatch(openDetailsModalIsExpanded()),
    closeDetailsModalIsExpanded: () => dispatch(closeDetailsModalIsExpanded()),
    openAcceptModalIsExpanded: () => dispatch(openAcceptModalIsExpanded()),
    setModalWantId: (wantId) => dispatch(setModalWantId(wantId)),
    setDetailsModalType: (modalType) => dispatch(setDetailsModalType(modalType)),
    updateFeed: (feed) => dispatch(updateFeed(feed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Want);