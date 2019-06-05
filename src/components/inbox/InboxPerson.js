import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { IMAGE_URL } from '../../services/variables/variables';
import PropTypes from 'prop-types';

const inboxPersonStyle = {
    selected: {
        backgroundColor: 'rgba(151, 117, 170, 0.2)'
    },
    unselected: {
        backgroundColor: '#fff'
    }
}

export default class InboxPerson extends Component {
    constructor(props) {
        super(props);

        this.onInboxPersonPressed = this.onInboxPersonPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
        
        this.state = {
            convo_id: null,
            receiver: null,
            want: null
        }
    }

    componentDidMount() {
        const { id, wanter, fulfiller, want } = this.props;
        const adminIsSender = JSON.parse(localStorage.getItem('user')).id == wanter.id;

        this.setState({
            ...this.state,
            convo_id: id,
            receiver: adminIsSender ? fulfiller : wanter,
            want: want
        });
    }

    onInboxPersonPressed() {
        const { convo_id } = this.state;
        this.props.handleInboxChat(convo_id);
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}${description.length > limit ? '...' : ''}`;
    }

    render() {
        const { convo_id, receiver, want } = this.state;
        const { currentConvoid, id, updated_at, unseen_count } = this.props;
        return receiver ? (
            <div 
                className="inbox-person"
                onClick={this.onInboxPersonPressed}
                style={currentConvoid == id ? inboxPersonStyle.selected : inboxPersonStyle.unselected}
            >
                <div className="wrapper-flex wrapper-flex--center">
                    <Link to={`/profile/${receiver.id}`} target="_blank" className="link">
                        <img 
                            src={`${IMAGE_URL}/${receiver.avatar}`}
                            className="profile-picture"
                        />
                    </Link>
                    <div className="marg-l-sm wrapper-flex-spaced--flex1">
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center marg-e">
                            <h4 className="want-text marg-e">
                                <Link to={`/profile/${receiver.id}`} target="_blank" className="want-link link">
                                    {receiver.first_name}
                                </Link>
                            </h4>
                            <h4 className="want-text marg-e">{`${moment(updated_at).fromNow(true)}`}</h4>
                        </div>
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                            <h4 className="want-text marg-e">{want ? this.applyCharacterLimit(want.title, 20) : '-'}</h4>
                            {unseen_count != 0 && (
                                <h4 className="marg-e">
                                    <span className="inbox-person__unseen">
                                        {unseen_count}
                                    </span>
                                </h4>
                            )}
                        </div>
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
    want: PropTypes.object,
    currentConvoid: PropTypes.number
}