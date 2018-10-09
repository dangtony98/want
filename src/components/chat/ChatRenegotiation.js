import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

export class ChatRenegotiation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const chatRenegotiationStyles = this.props.chatIsExpanded && this.props.chatRenegotiationIsExpanded ? 'chat-renegotiation--active' : 'chat-renegotiation--inactive';
        return (
            <div className={`chat-renegotiationX wrapper-flex wrapper-flex--center`}>
                <Field 
                    name="offer"
                    component="input"
                    placeholder="Enter a new offer"
                    autocomplete="off"
                    className="chat-box-input input-text"
                />
                <button
                    type="submit"
                    className="button-shaded marg-l-sm"
                >Send</button>
            </div>
        );
    }
}

const mapStateToProps = ({ layout }) => ({
    chatIsExpanded: layout.chatIsExpanded,
    chatRenegotiationIsExpanded: layout.chatRenegotiationIsExpanded
});

export default connect(mapStateToProps)(reduxForm({ form: 'renegotiation' })(ChatRenegotiation));