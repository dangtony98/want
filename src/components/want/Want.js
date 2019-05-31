import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import WantComment from './WantComment';
import WantInput from './WantInput';
import { deleteWant, bookmarkWant, unbookmarkWant } from '../../services/api/want';
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
        this.onBookmarkWantPressed = this.onBookmarkWantPressed.bind(this);
        this.onAcceptBtnPressed = this.onAcceptBtnPressed.bind(this);
        this.onDeleteBtnPressed = this.onDeleteBtnPressed.bind(this);
        this.onCounterBtnPressed = this.onCounterBtnPressed.bind(this);
        this.appendComment = this.appendComment.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);

        this.state = {
            expanded: true,
            width: 0,
            height: 0,
            bookmark_id: null,
            comments: []
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        const { bookmark } = this.props;

        if (bookmark != null) {
            this.setState({
                ...this.state,
                bookmark_id: bookmark.id
            });
        } 
        
        this.setState({
            ...this.state,
            comments: !this.props.hit ? this.props.comments : []
        })
      }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
    }

    onBookmarkWantPressed(id) {
        const { bookmark_id } = this.state;

        if (bookmark_id == null) {
            bookmarkWant(id, (response) => {
                this.setState({
                    ...this.state,
                    bookmark_id: response.data.id
                });
            });
        } else {
            unbookmarkWant(bookmark_id, () => {
                this.setState({
                    ...this.state,
                    bookmark_id: null
                });
            });
        }
    }

    onAcceptBtnPressed() {
        console.log('onAcceptBtnPressed()');
    }

    onDeleteBtnPressed(id) {
        deleteWant(id, () => {
            getFeed((response) => {
                this.props.updateFeed(response.data);
            });
        });
    }

    onCounterBtnPressed() {
        console.log('onCounterBtnPressed()');
    }

    appendComment(comment) {
        this.setState({
            ...this.state,
            comments: [...this.state.comments, comment]
        });
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { categories, category_id, cost, created_at, description, admin_id, title, user, id, bookmark} = this.props;
        const { expanded, width, bookmark_id, comments } = this.state;
        return (
            <div className="want want--feed marg-t-sm">
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
                    <button
                        onClick={() => this.onBookmarkWantPressed(id)}
                        className="button-icon"
                    >
                        {bookmark_id != null ? (
                            <i className="icon-bookmark fas fa-bookmark"></i>
                        ) : (
                            <i className="icon-bookmark far fa-bookmark"></i>
                        )}
                    </button>
                </div>
                <Link to={`/want/${id}`} className="want-link link">
                    <h2 className="want__title marg-t-xs marg-b-xs">
                        {!this.props.hit ? title : <Highlight hit={this.props.hit} attribute="title" />}
                    </h2>
                </Link>
                <h3 className="want__pay">{cost == 0 ? 'FREE' : numeral(cost / 100).format('$0,0.00')}</h3>
                <p className="want-text">
                    {expanded ? (!this.props.hit ? description : <Highlight hit={this.props.hit} attribute="description" />) : (width > 500 ? this.applyCharacterLimit(description, 200) : this.applyCharacterLimit(description, 100))}
                </p>
                <div className="wrapper-flex-spaced wrapper-flex-spaced--bottom">
                    <div className="wrapper-flex wrapper-flex--center">
                        <button
                            onClick={this.onAcceptBtnPressed} 
                            className="button-simple marg-t-sm"
                        >{(admin_id == user.id) ? 'Edit' : 'Accept'}</button>
                        {(admin_id == user.id) ? 
                            (<button
                                onClick={() => this.onDeleteBtnPressed(id)} 
                                className="want__counter-button button-simple marg-t-sm"
                            >Delete</button>) : 
                            (<button
                            onClick={this.onCounterBtnPressed} 
                            className="want__counter-button button-simple marg-t-sm"
                            >Counter</button>)
                        }
                    </div>
                    <h4 className="want-text marg-e marg-t-sm">
                        <Link to={`/want/${id}`} className="want-link link">
                            More
                        </Link>
                    </h4>
                </div>
                <MediaQuery query="(min-width: 400px)">
                    {!this.props.hit &&
                        <div>
                            <hr className="hr marg-t-sm marg-b-sm"></hr>
                            {comments.map((comment) => (
                                <WantComment 
                                    comment={comment}
                                    wantId={id}
                                    key={comment.id}
                                />    
                            ))}
                            <WantInput 
                                reply={false}
                                wantId={id}
                                appendComment={this.appendComment}
                            />
                        </div>
                    }
                </MediaQuery>
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
    comments: PropTypes.array,
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