import React, { Component } from 'react';
import { connect } from 'react-redux';

export class InboxChat extends Component {
    render() {
        return (
            <div className="inbox-chat">
                <h4 className="content-heading">Chat</h4>
                <div className="inbox-chat__box">
                    This is the InboxChat box component.
                </div>
            </div>
        );
    }
}

export default connect()(InboxChat);