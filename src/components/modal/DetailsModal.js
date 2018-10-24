import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import Want from '../want/Want';
import PropTypes from 'prop-types';

export class DetailsModal extends Component {
    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        const { isOpen, detailsModalWantId, wants } = this.props;
        return (
            <ReactModal 
                isOpen={isOpen}
                className="details-modal"
                overlayClassName="details-modal--overlay"
            >
                <div className="details-modal__header">
                    {wants.map((want) => {
                        return want.wantId == detailsModalWantId &&
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
                </div>
            </ReactModal>
        );
    }
}

DetailsModal.propTypes = {
    detailsModalWantId: PropTypes.string,
}

const mapStateToProps = ({ modal, feed }) => ({
    detailsModalWantId: modal.detailsModalWantId,
    wants: feed.wants
});

export default connect(mapStateToProps)(DetailsModal);