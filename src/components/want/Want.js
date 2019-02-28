import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WantInput from './WantInput';
import { getWant, deleteWant } from '../../services/api/want';
import { updateFeed } from '../../actions/feed';
import { getFeed } from '../../services/api/feed';
import { IMAGE_URL } from '../../services/variables/variables';
import moment from 'moment';
import numeral from 'numeral';
import MediaQuery from 'react-responsive';
import { Highlight } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

export class Want extends Component {
    constructor(props) {
        super(props);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onAcceptButtonPressed = this.onAcceptButtonPressed.bind(this);
        this.onDeleteButtonPressed = this.onDeleteButtonPressed.bind(this);
        this.onCounterOfferButtonPressed = this.onCounterOfferButtonPressed.bind(this);
        this.onShareButtonPressed = this.onShareButtonPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);

        this.state = {
            expanded: false,
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
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

    onShareButtonPressed() {

    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        console.log('Want props');
        console.log(this.props);
        const { categories, category_id, cost, created_at, description, admin_id, title, user, id} = this.props;
        const { expanded, width } = this.state;
        console.log('width from Want: ' + this.state.width);
        return (
            <div 
                className="want want--feed marg-t-sm"
            >
                <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                    <div className="wrapper-flex wrapper-flex--center">
                        <Link to={`/profile/${user.id}`} target="_blank" className="link">
                            <img 
                                src={`${IMAGE_URL}/${user.avatar}`}
                                className="profile-picture"
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
                            {/* <button
                                onClick={this.onShareButtonPressed}
                                className="button-icon"
                            > */}
                                {/* <i class="icon-share fas fa-share"></i> */}
                                {/* <i class="icon-share fas fa-link"></i>
                            </button> */}
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
                    {expanded ? description : (width > 500 ? this.applyCharacterLimit(description, 200) : this.applyCharacterLimit(description, 100))}
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
                    <h4 className="want-text marg-e marg-t-sm"></h4>
                </div>
                {admin_id != user.id &&
                    <div>
                        <MediaQuery query="(min-width: 400px)">
                            <hr className="hr marg-t-sm marg-b-sm"></hr>
                            <WantInput 
                                id={id}
                            />
                        </MediaQuery>
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