import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
 
export class InboxChat extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            chatInput: ''
        }
    }

    handleChange(e) {
        console.log('handleChange() in InboxChat triggered.');
        this.setState({
            chatInput: e.taget.value
        })
    }

    render() {
        const { chatInput } = this.state;
        return (
            <div className="inbox-chat">
                <h4 className="content-heading">Chat</h4>
                <div className="inbox-chat__box">
                    <div className="inbox-chat__top wrapper-flex-spaced wrapper-flex-spaced--center">
                        <div></div>
                        <div>
                            Name
                        </div>
                        <div></div>
                    </div>
                    <div className="inbox-chat__bottom wrapper-flex wrapper-flex--center">
                        <Textarea 
                            minRows={1}
                            maxRows={5}
                            value={chatInput}
                            onChange={this.handleChange}
                            placeholder="Enter a message"
                            className="inbox-chat-textarea textarea"
                        />
                        <button className="button-icon">
                            <i className="icon-paperclip fas fa-paperclip marg-l-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(InboxChat);