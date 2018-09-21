import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeChatIsExpanded } from '../../actions/layout';

export class ChatBox extends Component {
    constructor(props) {
        super(props);

        this.onCloseBtnPressed = this.onCloseBtnPressed.bind(this);
    }

    onCloseBtnPressed() {
        this.props.closeChatIsExpanded();
        console.log('Triggered onCloseBtnPressed');
    }

    render() {
        const chatBoxStyles = this.props.chatIsExpanded ? 'chat-box--active' : 'chat-box--inactive';
        return (
            <div className={`chat-box ${chatBoxStyles}`}>
                <div className="chat-box__header">
                    <div></div>
                    <button
                        onClick={this.onCloseBtnPressed}
                        className="chat-box-button button-icon"
                    >
                        <i class="icon-minimize fas fa-window-minimize"></i>
                    </button>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = ({ layout }) => ({
    chatIsExpanded: layout.chatIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    closeChatIsExpanded: () => dispatch(closeChatIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);