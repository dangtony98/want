import React, { Component } from 'react';
import WantInput from './WantInput';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';

export default class WantComment extends Component {
    constructor(props) {
        super(props);

        this.onReplyBtnPressed = this.onReplyBtnPressed.bind(this);

        this.state = {
            replyActive: false
        }
    }

    onReplyBtnPressed() {
        this.setState({
            ...this.state,
            replyActive: true
        });
    }

    render() {
        const { comment } = this.props;
        const { replyActive } = this.state;
        return (
            <div className="wrapper-flex wrapper-flex--top marg-b-xs">
                <Link to={`/profile/${comment.user.id}`} className="link">
                    <img 
                        src={`${IMAGE_URL}/${comment.user.avatar}`}
                        className="profile-picture--mini marg-r-xs"
                    />
                </Link>
                <div>
                    <div className="want-comment">
                            {comment.body}
                    </div>
                    <div className="wrapper-flex wrapper-flex--center marg-t-xxs">
                        <h5 className="want-text marg-r-sm">{moment(comment.created_at).fromNow(true)}</h5>
                        <button
                            onClick={this.onReplyBtnPressed} 
                            className="button-simple link"
                        ><h5>↳ Reply</h5></button>
                    </div>
                </div>
            </div>
        );
    }
}