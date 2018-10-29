import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { closeAcceptModalIsExpanded } from '../../actions/modal';
import PropTypes from 'prop-types';

export class AcceptModal extends Component {
    constructor(props) {
        super(props);

        this.onCloseBtnPressed = this.onCloseBtnPressed.bind(this);
        this.onOutsideModalPressed = this.onOutsideModalPressed.bind(this);
    }

    onCloseBtnPressed() {
        this.props.closeAcceptModalIsExpanded();
    }

    onOutsideModalPressed() {
        this.props.closeAcceptModalIsExpanded();
    }

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        const { isOpen, modalWantId, wants } = this.props;
        return (
            <ReactModal
                isOpen={isOpen}
                className="accept-modal"
                overlayClassName="modal-overlay"
                onRequestClose={this.onOutsideModalPressed}
            >
                {wants.map((want) => {
                    return want.wantId == modalWantId &&
                        <div key={want.wantId}>
                            <div className="wrapper-flex-spaced wrapper-flex--center">
                                <div></div>
                                <p className="accept-modal__description modal__description"> 
                                    <i className="icon-verified fas fa-check-circle"></i> 
                                    {` We've sent your acceptance to ${want.firstName}`}
                                </p>
                                <button
                                    onClick={this.onCloseBtnPressed} 
                                    className="button-icon">
                                    <i className="icon-close fas fa-times"></i>
                                </button>
                            </div>
                            <p className="accept-modal__description modal__description marg-t-xs">
                                We'll notify you once we get a mutual confirmation
                            </p>
                        </div>
                })}
            </ReactModal>
        );
    }
}

AcceptModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modalWantId: PropTypes.string,
}

const mapStateToProps = ({ modal, feed }) => ({
    modalWantId: modal.modalWantId,
    wants: feed.wants
});

const mapDispatchToProps = (dispatch) => ({
    closeAcceptModalIsExpanded: () => dispatch(closeAcceptModalIsExpanded())
})

export default connect(mapStateToProps, mapDispatchToProps)(AcceptModal);