import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

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
                    autoComplete="off"
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

ChatRenegotiation.propTypes = {
    chatIsExpanded: PropTypes.bool.isRequired,
    chatRenegotiationIsExpanded: PropTypes.bool.isRequired
}

const mapStateToProps = ({ layout }) => ({
    chatIsExpanded: layout.chatIsExpanded,
    chatRenegotiationIsExpanded: layout.chatRenegotiationIsExpanded
});

export default connect(mapStateToProps)(reduxForm({ form: 'renegotiation' })(ChatRenegotiation));