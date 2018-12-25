import React from 'react';
import { connect } from 'react-redux';
import AcceptModal from './AcceptModal';
import DetailsModal from './DetailsModal';
import SettingsPaymentModal from './SettingsPaymentModal';
import PropTypes from 'prop-types';

const ModalHandler = ({ acceptModalIsExpanded, detailsModalIsExpanded, settingsPaymentModalIsExpanded, detailsModalType }) => (
    <div>
        <AcceptModal 
            isOpen={acceptModalIsExpanded}
            closeTimeoutMS={150}
        />
        <DetailsModal 
            isOpen={detailsModalIsExpanded}
            detailsModalType={detailsModalType}
            closeTimeoutMS={150}
        />
        <SettingsPaymentModal
            isOpen={settingsPaymentModalIsExpanded}
            closeTimeoutMS={150}
        />
    </div>
);

ModalHandler.propTypes = {
    acceptModalIsExpanded: PropTypes.bool.isRequired,
    detailsModalIsExpanded: PropTypes.bool.isRequired,
    settingsPaymentModalIsExpanded: PropTypes.bool.isRequired,
    detailsModalType: PropTypes.string
}

const mapStateToProps = ({ modal }) => ({
    acceptModalIsExpanded: modal.acceptModalIsExpanded,
    detailsModalIsExpanded: modal.detailsModalIsExpanded,
    settingsPaymentModalIsExpanded: modal.settingsPaymentModalIsExpanded,
    detailsModalType: modal.detailsModalType
});

export default connect(mapStateToProps)(ModalHandler);