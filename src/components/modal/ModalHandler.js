import React from 'react';
import { connect } from 'react-redux';
import AcceptModal from './AcceptModal';
import DetailsModal from './DetailsModal';
import PropTypes from 'prop-types';

const ModalHandler = ({ acceptModalIsExpanded, detailsModalIsExpanded }) => (
    <div>
        <AcceptModal 
            isOpen={acceptModalIsExpanded}
            closeTimeoutMS={150}
        />
        <DetailsModal 
            isOpen={detailsModalIsExpanded}
            closeTimeoutMS={150}
        />
    </div>
);

ModalHandler.propTypes = {
    acceptModalIsExpanded: PropTypes.bool.isRequired,
    detailsModalIsExpanded: PropTypes.bool.isRequired
}

const mapStateToProps = ({ modal }) => ({
    acceptModalIsExpanded: modal.acceptModalIsExpanded,
    detailsModalIsExpanded: modal.detailsModalIsExpanded
});

export default connect(mapStateToProps)(ModalHandler);