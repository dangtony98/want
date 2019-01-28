import React from 'react';
import { connect } from 'react-redux';

const InboxPeople = () => (
    <div className="inbox-people">
        <h4 className="content-heading">People</h4>
        <div className="inbox-people__box">

        </div>
    </div>
);

export default connect()(InboxPeople);