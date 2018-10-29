import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { closeDetailsModalIsExpanded } from '../../actions/modal';
import Want from '../want/Want';
import PropTypes from 'prop-types';

export class DetailsModal extends Component {
    constructor(props) {
        super(props);

        this.onOutsideModalPressed = this.onOutsideModalPressed.bind(this);
    }

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    onOutsideModalPressed() {
        this.props.closeDetailsModalIsExpanded();
    }

    render() {
        const { isOpen, modalWantId, wants } = this.props;
        return (
            <ReactModal 
                isOpen={isOpen}
                className="details-modal"
                overlayClassName="modal-overlay"
                onRequestClose={this.onOutsideModalPressed}
            >
                {wants.map((want) => {
                    return want.wantId == modalWantId &&
                        <Want
                            isDetailsModal={true}
                            wantId={want.wantId}
                            firstName={want.firstName}
                            photo={want.photo}
                            timestamp={want.timestamp}
                            title={want.title}
                            pay={want.pay}
                            description={want.description} 
                            key={want.wantId}
                        />
                })}
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