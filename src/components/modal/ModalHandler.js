import React from 'react';
import { connect } from 'react-redux';
import SettingsPaymentModal from './SettingsPaymentModal';
import PropTypes from 'prop-types';

const ModalHandler = ({ settingsPaymentModalIsExpanded }) => (
    <div>
        <SettingsPaymentModal
            isOpen={settingsPaymentModalIsExpanded}
            closeTimeoutMS={150}
        />
    </div>
);

ModalHandler.propTypes = {
    settingsPaymentModalIsExpanded: PropTypes.bool.isRequired,
    detailsModalType: PropTypes.string
}

const mapStateToProps = ({ modal }) => ({
    settingsPaymentModalIsExpanded: modal.settingsPaymentModalIsExpanded,
    detailsModalType: modal.detailsModalType
});

export default connect(mapStateToProps)(ModalHandler);