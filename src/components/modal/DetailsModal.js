import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { closeDetailsModalIsExpanded } from '../../actions/modal';
import Want from '../want/Want';
import PropTypes from 'prop-types';

export class DetailsModal extends Component {
    constructor(props) {
        super(props);

        this.retrieveWant = this.retrieveWant.bind(this);
        this.onOutsideModalPressed = this.onOutsideModalPressed.bind(this);
    }

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    retrieveWant(wantId, detailsModalType) {
        // SEND GET REQUEST TO RETRIEVE WANT INFORMATION
        // IF SUCCESSFUL RESPONSE, RETURN WANT COMPONENT
    }

    onOutsideModalPressed() {
        this.props.closeDetailsModalIsExpanded();
    }

    render() {
        const { isOpen, modalWantId, wants, detailsModalType } = this.props;
        // console.log('modalWantId: ' + modalWantId);
        // console.log('detailsModalType: ' + detailsModalType);
        return (
            <ReactModal 
                isOpen={isOpen}
                className="details-modal"
                overlayClassName="modal-overlay"
                onRequestClose={this.onOutsideModalPressed}
            >
            {/* TRIGGER retrieveWant() HERE */}
                {/* {wants.map((want) => {
                    return want.wantId == modalWantId &&
                        <Want
                            detailsModalType={detailsModalType}
                            wantId={want.wantId}
                            firstName={want.firstName}
                            photo={want.photo}
                            timestamp={want.timestamp}
                            title={want.title}
                            pay={want.pay}
                            description={want.description}
                            key={want.wantId}
                        />
                })} */}
            </ReactModal>
        );
    }
}

DetailsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modalWantId: PropTypes.string,
    wants: PropTypes.array,
    closeDetailsModalIsExpanded: PropTypes.func.isRequired
}

const mapStateToProps = ({ modal, feed }) => ({
    modalWantId: modal.modalWantId,
    wants: feed.wants
});

const mapDispatchToProps = (dispatch) => ({
    closeDetailsModalIsExpanded: () => dispatch(closeDetailsModalIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);