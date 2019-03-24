import React, { Component } from 'react';
import WantInput from './WantInput';
import WantReply from './WantReply';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';

export default class WantComment extends Component {
    constructor(props) {
        super(props);

        this.onReplyBtnPressed = this.onReplyBtnPressed.bind(this);
        this.onDeleteCommentPressed = this.onDeleteCommentPressed.bind(this);
        this.onDeleteReplyPressed = this.onDeleteReplyPressed.bind(this);
        this.appendReply = this.appendReply.bind(this);

        this.state = {
            replyActive: false,
            replies: [],
            admin: null
        }
    }

    componentDidMount() {
        const { comment } = this.props;
        const admin = JSON.parse(localStorage.getItem('user'));
        this.setState({
            ...this.state,
            replies: comment.replies,
            admin
        });
    }

    onReplyBtnPressed() {
        this.setState((prevState) => ({
            ...this.state,
            replyActive: !prevState.replyActive
        }));
    }

    onDeleteCommentPressed() {
        // DELETE COMMENT REQUEST
        console.log('onDeleteComment');
    }

    onDeleteReplyPressed() {
        // DELETE REPLY REQUEST
        console.log('onDeleteReply')
    }

    appendReply(reply) {
        this.setState({
            ...this.state,
            replies: [...this.state.replies, reply]
        })
    }

    render() {
        const { comment, wantId } = this.props;
        const { replyActive, replies, admin } = this.state;
        return (
            <div className="wrapper-flex wrapper-flex--top marg-b-xs">
                <Link to={`/profile/${comment.user.id}`} className="link">
                    <img 
                        src={`${IMAGE_URL}/${comment.user.avatar}`}
                        className="profile-picture--mini marg-r-xs"
                    />
                </Link>
                <div className="want-comment-block">
                    <div className="want-comment">
                            {comment.body}
                    </div>
                    <div className="wrapper-flex wrapper-flex--center marg-t-xxs marg-b-xs">
                        <h5 className="want-text">
                            {`${moment(comment.created_at).fromNow(true)} ago`}
                        </h5>
                        <button
                            onClick={this.onReplyBtnPressed} 
                            className="button-simple link marg-l-xs"
                        ><h5>↳ Reply</h5></button>
                        {(admin && comment.user.id == admin.id) && (
                            <button
                                onClick={this.onDeleteCommentPressed}
                                className="button-icon marg-l-xs"
                            >
                                <i className="icon-trash fas fa-trash"></i>
                            </button>
                        )}
                    </div>
                    {replies.map((reply) => (
                        <WantReply 
                            reply={reply}
                            admin={admin}
                            onDeleteReplyPressed={this.onDeleteReplyPressed}
                            key={reply.id}
                        />
                    ))}
                    {replyActive && (
                        <div className="want-reply-block">
                            <WantInput 
                                reply={true}
                                wantId={wantId}
                                commentId={comment.id}
                                appendReply={this.appendReply}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}