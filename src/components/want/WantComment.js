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
        this.appendReply = this.appendReply.bind(this);

        this.state = {
            replyActive: false,
            replies: []
        }
    }

    componentDidMount() {
        const { replies } = this.props.comment;
        this.setState({
            ...this.state,
            replies
        });
    }

    onReplyBtnPressed() {
        this.setState((prevState) => ({
            ...this.state,
            replyActive: !prevState.replyActive
        }));
    }

    appendReply(reply) {
        this.setState({
            ...this.state,
            replies: [...this.state.replies, reply]
        })
    }

    render() {
        const { comment, wantId } = this.props;
        const { replyActive, replies } = this.state;
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
                    <div className="wrapper-flex wrapper-flex--center marg-t-xxs">
                        <h5 className="want-text marg-r-xs">
                            {moment(comment.created_at).fromNow(true)}
                        </h5>
                        <button
                            onClick={this.onReplyBtnPressed} 
                            className="button-simple link"
                        ><h5>↳ Reply</h5></button>
                    </div>
                    {replies.map((reply) => (
                        <WantReply 
                            reply={reply}
                            key={reply.id}
                        />
                    ))}
                    {replyActive && (
                        <div className="marg-t-xxs">
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