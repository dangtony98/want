import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalWantId, setDetailsModalType, openDetailsModalIsExpanded } from '../../actions/modal';
import PropTypes from 'prop-types';

const tabStyle = (isMatched) => ({
    backgroundColor: isMatched ? 'rgb(255, 255, 255)' : 'rgba(189, 195, 199, 0.3)'
});

export class CurrentWant extends Component {
    constructor(props) {
        super(props);

        this.onCurrentWantPressed = this.onCurrentWantPressed.bind(this);
        this.onEllipsisBtnPressed = this.onEllipsisBtnPressed.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    onCurrentWantPressed() {
        // TRIGGER EITHER WANT OR BIDDING MODAL
        const { wantId, isMatched } = this.props;
        
        this.props.setModalWantId(wantId);

        if (isMatched) {
            this.props.setDetailsModalType('WANT');
        } else {
            this.props.setDetailsModalType('BIDDING');
        }

        this.props.openDetailsModalIsExpanded();
    }

    onEllipsisBtnPressed() {
        console.log('Ellipsis Triggered in Current Want section.');
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const { isMatched, fulfiller, body } = this.props;
        return (
            <div
                onClick={this.onCurrentWantPressed} 
                className="current-want"
                style={tabStyle(isMatched)}
            >
                <div className="current-want__content">
                    <div className="wrapper-flex-spaced">
                        <h4 className="current-want__title">{this.applyCharacterLimit(body.title, 25)}</h4>
                        <div className="wrapper-flex wrapper-flex--center">
                            <h4 className="current-wants-text">{`(-$${body.pay})`}</h4>
                            <button
                                onClick={this.onEllipsisBtnPressed}
                                className="button-icon marg-l-xs"
                            >
                                <i className="icon-ellipsis-h fas fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                    <h4 className="current-wants-text">{fulfiller.firstName != null ? <span>By <Link to="/profile" target="_blank" className="link">{fulfiller.firstName}</Link></span> : <Link to="/profile" className="link">Select a Fulfiller</Link>}</h4>
                </div>
            </div>
        );
    }
}

CurrentWant.propTypes = {
    isMatched: PropTypes.bool.isRequired,
    fulfiller: PropTypes.object.isRequired,
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

export default connect(null, mapDispatchToProps)(CurrentWant);