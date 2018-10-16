import React from 'react';
import { connect } from 'react-redux';
import DetailsModal from './DetailsModal';

const ModalHandler = ({ detailsModalIsExpanded }) => (
    <DetailsModal 
        isOpen={detailsModalIsExpanded}
        closeTimeoutMS={150}
    />
);

const mapStateToProps = ({ modal }) => ({
    detailsModalIsExpanded: modal.detailsModalIsExpanded
});

export default connect(mapStateToProps)(ModalHandler);