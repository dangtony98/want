import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openChatIsExpanded } from '../../actions/layout';

export class ChatWidget extends Component {
    constructor(props) {
        super(props);

        this.onWidgetPressed = this.onWidgetPressed.bind(this);
    }

    onWidgetPressed() {
        if (!this.props.chatIsExpanded) {
            this.props.openChatIsExpanded();
        }
    }

    render() {
        const chatWidgetStyles = this.props.chatIsExpanded ? 'chat-widget--inactive' : 'chat-widget--active';
        return (
            <button 
                onClick={this.onWidgetPressed}
                className={`chat-widget ${chatWidgetStyles}`}
            >
                <i className="icon-chat fas fa-comment-alt"></i> 
            </button>
        );
    }
}

ChatWidget.propTypes = {
    chatIsExpanded: PropTypes.bool.isRequired,
    openChatIsExpanded: PropTypes.func.isRequired
}

const mapStateToProps = ({ layout }) => ({
    chatIsExpanded: layout.chatIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    openChatIsExpanded: () => dispatch(openChatIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWidget);