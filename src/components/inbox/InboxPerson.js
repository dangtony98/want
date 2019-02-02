import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';
import PropTypes from 'prop-types';

export default class InboxPerson extends Component {
    constructor(props) {
        super(props);

        this.onInboxPersonPressed = this.onInboxPersonPressed.bind(this);
        
        this.state = {
            convo_id: null,
            receiver: null,
            want: null
        }
    }

    componentDidMount() {
        const { id, wanter, fulfiller } = this.props;
        const adminIsSender = JSON.parse(localStorage.getItem('user')).id == wanter.id;

        this.setState({
            ...this.state,
            convo_id: id,
            receiver: adminIsSender ? fulfiller : wanter
        });
    }

    onInboxPersonPressed() {
        const { convo_id } = this.state;
        this.props.handleInboxChat(convo_id);
    }

    render() {
        const { receiver } = this.state;
        return receiver ? (
            <div 
                className="inbox-person"
                onClick={this.onInboxPersonPressed}
            >
                <div className="wrapper-flex wrapper-flex--center">
                    <Link to={`/profile/${receiver.id}`} target="_blank" className="link">
                        <img 
                            src={`${IMAGE_URL}/${receiver.avatar}`}
                            className="want__image"
                        />
                    </Link>
                    <div className="marg-l-sm">
                        <h4 className="want-text marg-e">
                            <Link to={`/profile/${receiver.id}`} target="_blank" className="want-link link">
                                {receiver.first_name}
                            </Link>
                        </h4>
                        <h4 className="want-text marg-e">ABC</h4>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                
            </div>
        );
    }
}