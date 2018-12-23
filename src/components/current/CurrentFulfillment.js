import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalWantId, setDetailsModalType, openDetailsModalIsExpanded } from '../../actions/modal';
import PropTypes from 'prop-types';

export class CurrentFulfillment extends Component {
    constructor(props) {
        super(props);

        this.onCurrentFulfillmentPressed = this.onCurrentFulfillmentPressed.bind(this);
        this.onEllipsisBtnPressed = this.onEllipsisBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onCurrentFulfillmentPressed() {
        // TRIGGER EITHER FULFILLMENT *** STANDARD *** MODAL
        const { wantId, isMatched } = this.props;

        this.props.setModalWantId(wantId);

        if (isMatched) {
            this.props.setDetailsModalType('FULFILLMENT');
        } else {
            this.props.setDetailsModalType('STANDARD');
        }

        this.props.openDetailsModalIsExpanded();
    }

    onEllipsisBtnPressed() {
        console.log('Ellipsis Triggered in Current Fulfillment section.');
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { isMatched, wanter, body } = this.props;
        const circleStyle = { color: isMatched ? '#2ECC71' : '#7F8C8D' }
        return (
            <div
                onClick={this.onCurrentFulfillmentPressed} 
                className="current-fulfillment"
            >
                <div className="current-fulfillment__content">
                    <div className="wrapper-flex-spaced">
                        <div className="wrapper-flex wrapper-flex--center">
                            <i
                                style={circleStyle} 
                                className="current-fulfillment__circle icon-circle fas fa-circle"
                            ></i>
                            <h4 className="current-fulfillment__title">{this.applyCharacterLimit(body.title, 25)}</h4>
                        </div>
                        <div className="wrapper-flex wrapper-flex--center">
                            <h4 className="current-fulfillments-text">{`(+$${body.pay})`}</h4>
                            <button
                                onClick={this.onEllipsisBtnPressed}
                                className="button-icon marg-l-xs"
                            >
                                <i className="icon-ellipsis-h fas fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                    <h4 className="current-fulfillments-text marg-l-sm">For {wanter.firstName != null ? <Link to="/profile" target="_blank" className="link">{wanter.firstName}</Link> : 'Undecided'}</h4>
                </div>
            </div>
        );
    }
}

CurrentFulfillment.propTypes = {
    isMatched: PropTypes.bool.isRequired,
    wanter: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
    openDetailsModalIsExpanded: PropTypes.func.isRequired,
    setModalWantId: PropTypes.func.isRequired,
    setDetailsModalType: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    openDetailsModalIsExpanded: () => dispatch(openDetailsModalIsExpanded()),
    setModalWantId: (wantId) => dispatch(setModalWantId(wantId)),
    setDetailsModalType: (modalType) => dispatch(setDetailsModalType(modalType))
});

export default connect(null, mapDispatchToProps)(CurrentFulfillment);