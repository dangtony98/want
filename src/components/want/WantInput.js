import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';
import { commentWant } from '../../services/api/want';

export class WantInput extends Component {
    constructor(props) {
        super(props);
        
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);

        this.state = {
            wantInput: ""
        }
    }

    handleTextChange(e) {
        this.setState({
            ...this.state,
            wantInput: e.target.value
        });
    }

    onEnterPressed(e) {
        const { wantInput } = this.state;
        const { id, appendComment } = this.props;
        if(e.keyCode == 13 && e.shiftKey == false && /\S/.test(e.target.value)) {
            e.preventDefault();
            commentWant(wantInput.trim(), id, () => {
                const user = JSON.parse(localStorage.getItem('user'));
                appendComment({
                    id: Math.round(Math.random() * 100),
                    user: {
                        id: user.id,
                        avatar: user.avatar
                    },
                    body: wantInput.trim(),
                    created_at: new Date()
                });
                this.setState({
                    ...this.state,
                    wantInput: ''
                });
            });      
        }
    }

    render() {
        const { wantInput } = this.state;
        const { admin_id, photo } = this.props;
        return (
            <div className="wrapper-flex wrapper-flex--top">
                <Link to={`/profile/${admin_id}`} className="link">
                    <img 
                        src={photo}
                        className="profile-picture--mini marg-r-xs"
                    />
                </Link>
                <Textarea 
                    minRows={1}
                    maxRows={3}
                    value={wantInput}
                    onKeyDown={this.onEnterPressed}
                    onChange={this.handleTextChange}
                    placeholder="Write a comment"
                    className="want-input-textarea textarea--mini"
                    disabled={false}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ admin }) => ({
    admin_id: admin.id,
    photo: admin.photo
});

export default connect(mapStateToProps)(WantInput);