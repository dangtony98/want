import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InboxPeople = ({ convos, handleInboxChat }, props) => {
    console.log('InboxPeople');
    console.log(props);
    return (
        <div className="inbox-people">
            <h4 className="content-heading">People</h4>
            <div className="inbox-people__box">
                {convos.map((convo, index) => (
                    <div className="inbox-people-tab">
                        {/* <button onClick={handleInboxChat(convo.id)}> */}
                            {/* {`Conversation with ID: ${convo.id}`} */}
                        {/* </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

InboxPeople.propTypes = {
    convos: PropTypes.array
}

export default connect()(InboxPeople);