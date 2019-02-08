import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { IMAGE_URL } from '../../services/variables/variables';
import PropTypes from 'prop-types';

const inboxPersonStyle = {
    selected: {
        backgroundColor: 'rgba(151, 117, 170, 0.1)'
    },
    unselected: {
        backgroundColor: '#fff'
    }
}

export default class InboxPerson extends Component {
    constructor(props) {
        super(props);

        this.onInboxPersonPressed = this.onInboxPersonPressed.bind(this);
        
        this.state = {
            convo_id: null,
            receiver: null,
            want: null,
            created_at: null
        }
    }

    componentDidMount() {
        const { id, wanter, fulfiller, want, created_at } = this.props;
        console.log('InboxPerson componentDidMount()');
        console.log(this.props);
        const adminIsSender = JSON.parse(localStorage.getItem('user')).id == wanter.id;

        this.setState({
            ...this.state,
            convo_id: id,
            receiver: adminIsSender ? fulfiller : wanter,
            want: want,
            created_at: created_at
        });
    }

    onInboxPersonPressed() {
        const { convo_id } = this.state;
        this.props.handleInboxChat(convo_id);
    }

    render() {
        const { convo_id, receiver, want, created_at } = this.state;
        const { currentConvoid } = this.props;
        return receiver ? (
            <div 
                className="inbox-person"
                onClick={this.onInboxPersonPressed}
                style={currentConvoid == convo_id ? inboxPersonStyle.selected : inboxPersonStyle.unselected}
            >
                <div className="wrapper-flex wrapper-flex--center">
                    <Link to={`/profile/${receiver.id}`} target="_blank" className="link">
                        <img 
                            src={`${IMAGE_URL}/${receiver.avatar}`}
                            className="want__image"
                        />
                    </Link>
                    <div className="marg-l-sm wrapper-flex-spaced--flex1">
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center marg-e">
                            <h4 className="want-text marg-e">
                                <Link to={`/profile/${receiver.id}`} target="_blank" className="want-link link">
                                    {receiver.first_name}
                                </Link>
                            </h4>
                            <h4 className="want-text marg-e">{`${moment(created_at).fromNow(true)}`}</h4>
                        </div>
                        <h4 className="want-text marg-e">{want ? want.title : 'Conversation'}</h4>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                
            </div>
        );
    }
}

InboxPerson.propTypes = {
    id: PropTypes.number,
    wanter: PropTypes.object,
    fulfiller: PropTypes.object,
    currentConvoid: PropTypes.number
}