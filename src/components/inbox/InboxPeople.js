import React, { Component } from 'react';
import { connect } from 'react-redux';

export class InboxPeople extends Component {
    render() {
        return (
            <div className="inbox-people">
                <h4 className="content-heading">People</h4>
                <div className="inbox-people__box">
                    This is the InboxPeople box component.
                </div>
            </div>
        );
    }
}

export default connect()(InboxPeople);