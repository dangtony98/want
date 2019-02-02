import React, { Component } from 'react';
import InboxPerson from './InboxPerson';
import PropTypes from 'prop-types';

export default class InboxPeople extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentDidMount() {
        // console.log('InboxPeople componentDidMount()');
        // console.log(this.props.convos);
    }

    render() {
        const { convos } = this.props;
        // console.log(this.props);
        return (
            <div className="inbox-people">
                <h4 className="content-heading">People</h4>
                <div className="inbox-people__box">
                    {convos.map((convo) => (
                        <InboxPerson 
                            {...convo}
                            handleInboxChat={this.props.handleInboxChat}
                            key={convo.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

InboxPeople.propTypes = {
    convos: PropTypes.array
}