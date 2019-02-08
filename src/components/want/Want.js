import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { getWant, deleteWant } from '../../services/api/want';
import { updateFeed } from '../../actions/feed';
import { getFeed } from '../../services/api/feed';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../services/variables/variables';
import moment from 'moment';
import numeral from 'numeral';

export class Want extends Component {
    constructor(props) {
        super(props);

        this.onAcceptBtnPressed = this.onAcceptBtnPressed.bind(this);
        this.onDeleteButtonPressed = this.onDeleteButtonPressed.bind(this);
        this.onCounterOfferBtnPressed = this.onCounterOfferBtnPressed.bind(this);
        this.onDetailsBtnPressed = this.onDetailsBtnPressed.bind(this);
        this.onShareBtnPressed = this.onShareBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);

        this.state = {
            copiedAnimation: false
        }
    }

    onAcceptBtnPressed() {

    }

    onDeleteButtonPressed(id) {
        deleteWant(id, () => {
            getFeed(this.props);
        });
    }

    onCounterOfferBtnPressed() {

    }

    onDetailsBtnPressed() {
        getWant(this.props.id, () => {

        });
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

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { categories, category_id, cost, created_at, description, admin_id, title, user, id} = this.props;
        const { copiedAnimation } = this.state;
        
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
                className="want want--feed marg-t-sm"
            >
                <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                    <div className="wrapper-flex wrapper-flex--center">
                        <Link to={`/profile/${user.id}`} target="_blank" className="link">
                            <img 
                                src={`${IMAGE_URL}/${user.avatar}`}
                                className="want__image"
                            />
                        </Link>
                        <div className="marg-l-sm">
                            <h4 className="want-text marg-e">
                                <Link to={`/profile/${user.id}`} target="_blank" className="want-link link">
                                    {user.first_name}
                                </Link>
                            </h4>
                            <h4 className="want-text marg-e">{`${moment(created_at).fromNow(true)} ago`}</h4>
                        </div>
                    </div>
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
                </div>
                <h3 className="want-text marg-t-xs marg-b-xs">{title}</h3>
                <h4 className="want__pay">{numeral(cost / 100).format('$0,0.00')}</h4>
                <p className="want-text">
                    {this.applyCharacterLimit(description, 200)}
                </p>
                <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                    <div className="wrapper-flex">
                        <button
                            onClick={this.onAcceptBtnPressed} 
                            className="button-simple marg-t-sm"
                        >{(admin_id == user.id) ? 'Edit' : 'Accept'}</button>
                        {(admin_id == user.id) ? 
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
                    <button
                        onClick={this.onDetailsBtnPressed} 
                        className="want__accept-button button-simple marg-t-sm"
                    >Details</button>
                </div>
            </div>
        );
    }
}

Want.propTypes = {
    admin_id: PropTypes.number,
    category_id: PropTypes.number,
    cost: PropTypes.number,
    created_at: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.object,
    updateFeed: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = ({ admin, filter }) => ({
    admin_id: admin.id,
    categories: filter.categories
});

const mapDispatchToProps = (dispatch) => ({
    updateFeed: (feed) => dispatch(updateFeed(feed))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Want));