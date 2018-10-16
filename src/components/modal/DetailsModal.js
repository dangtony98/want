import React from 'react';
import ReactModal from 'react-modal';

export default ({ isOpen }) => (
    <ReactModal 
        isOpen={isOpen}
        className="details-modal"
        overlayClassName="details-modal--overlay"
    />
);