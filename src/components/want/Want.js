import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WantInput from './WantInput';
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

        this.onAcceptButtonPressed = this.onAcceptButtonPressed.bind(this);
        this.onDeleteButtonPressed = this.onDeleteButtonPressed.bind(this);
        this.onCounterOfferButtonPressed = this.onCounterOfferButtonPressed.bind(this);
        this.onCommentsButtonPressed = this.onCommentsButtonPressed.bind(this);
        this.onShareButtonPressed = this.onShareButtonPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);

        this.state = {
            copiedAnimation: false,
            expanded: false
        }
    }

    onAcceptButtonPressed() {

    }

    onDeleteButtonPressed(id) {
        deleteWant(id, () => {
            getFeed(this.props);
        });
    }

    onCounterOfferButtonPressed() {

    }

    onCommentsButtonPressed() {

    }

    onShareButtonPressed() {
        // TRIGGER SHARE ANIMATION
        // if (!this.state.copiedAnimation) {
        //     this.setState({ ...this.state, copiedAnimation: true }, () => {
        //         window.setTimeout(() => {
        //             this.setState({
        //                 copiedAnimation: false
        //             });
        //         }, 900);
        //     });
        // }
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { categories, category_id, cost, created_at, description, admin_id, title, user, id} = this.props;
        const { copiedAnimation, expanded } = this.state;
        
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
                            {/* <div>
                                {copiedAnimation && <div className="want-copied">Copied</div>}
                            </div> */}
                            <button
                                onClick={this.onShareButtonPressed}
                                className="button-icon"
                            >
                                <i class="icon-share fas fa-share"></i>
                            </button>
                            <button
                                onClick={this.onShareButtonPressed}
                                className="button-icon"
                            >
                                <i class="icon-heart far fa-heart"></i>
                            </button>
                        </div>
                </div>
                <h2 className="want__title marg-t-xs marg-b-xs">{title}</h2>
                <h4 className="want__pay">{numeral(cost / 100).format('$0,0.00')}</h4>
                <p className="want-text">
                    {expanded ? description : this.applyCharacterLimit(description, 200)}
                </p>
                <div className="wrapper-flex-spaced wrapper-flex-spaced--bottom">
                    <div className="wrapper-flex wrapper-flex--center">
                        <button
                            onClick={this.onAcceptButtonPressed} 
                            className="button-simple marg-t-sm"
                        >{(admin_id == user.id) ? 'Edit' : 'Accept'}</button>
                        {(admin_id == user.id) ? 
                            (<button
                                onClick={() => this.onDeleteButtonPressed(id)} 
                                className="want__counter-button button-simple marg-t-sm"
                            >Delete</button>) : 
                            (<button
                            onClick={this.onCounterOfferButtonPressed} 
                            className="want__counter-button button-simple marg-t-sm"
                            >Counteroffer</button>)
                        }
                    </div>
                    <h4 className="want-text marg-e marg-t-sm">Comments (0)</h4>
                </div>
                {admin_id != user.id &&
                    <div>
                        <hr className="hr marg-t-sm marg-b-sm"></hr>
                        <WantInput 
                            id={id}
                        />
                    </div>
                }
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
}

const mapStateToProps = ({ admin, filter }) => ({
    admin_id: admin.id,
    categories: filter.categories
});

const mapDispatchToProps = (dispatch) => ({
    updateFeed: (feed) => dispatch(updateFeed(feed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Want);