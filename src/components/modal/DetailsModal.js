import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { closeDetailsModalIsExpanded } from '../../actions/modal';
import { getWant } from '../../services/api/want';
import Want from '../want/Want';
import PropTypes from 'prop-types';

export class DetailsModal extends Component {
    constructor(props) {
        super(props);

        this.retrieveWant = this.retrieveWant.bind(this);
        this.onOutsideModalPressed = this.onOutsideModalPressed.bind(this);

        this.state = {
            want: null
        }
    }

    componentDidMount() {
        const { id, detailsModalType } = this.props;
        this.retrieveWant(id, detailsModalType);
    }

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    retrieveWant(id, detailsModalType) {
        getWant(id, (response) => {
            const props = {
                detailsModalType: detailsModalType,
                id: response.data.want.id,
                user: response.data.want.user,
                created_at: response.data.want.created_at,
                title: response.data.want.title,
                cost: response.data.want.cost,
                description: response.data.want.description
            }

            this.setState({
                ...this.state,
                want: (
                    <Want 
                        {...props}
                    />
                )
            });
        });
    }

    onOutsideModalPressed() {
        this.props.closeDetailsModalIsExpanded();
    }

    render() {
        const { isOpen } = this.props;
        const { want } = this.state;
        return (
            <ReactModal 
                isOpen={isOpen}
                className="details-modal"
                overlayClassName="modal-overlay"
                onRequestClose={this.onOutsideModalPressed}
            >
                { want && want}
            </ReactModal>
        );
    }
}

DetailsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    detailsModalType: PropTypes.string,
    id: PropTypes.number,
    closeDetailsModalIsExpanded: PropTypes.func.isRequired
}

const mapStateToProps = ({ modal }) => ({
    id: modal.modalWantId
});

const mapDispatchToProps = (dispatch) => ({
    closeDetailsModalIsExpanded: () => dispatch(closeDetailsModalIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);