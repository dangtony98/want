import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import PropTypes from 'prop-types';
import { invertSortIsExpanded } from '../../actions/layout';

export class Sort extends Component {
    constructor(props) {
        super(props);

        this.onSortBtnPressed = this.onSortBtnPressed.bind(this);
    }

    onSortBtnPressed() {
        this.props.invertSortIsExpanded();
    }

    render() {
        const { sortIsExpanded } = this.props;
        return (
            <div className="sort">
                <button
                    onClick={this.onSortBtnPressed} 
                    className="button">
                    Sort
                    { sortIsExpanded ? <i className="icon-dropdown fas fa-chevron-up"></i>
                    : <i className="icon-dropdown fas fa-chevron-down"></i>}
                    
                </button>
                <Collapse isOpened={sortIsExpanded}>
                    <div className="sort-dropdown">

                    </div>
                </Collapse>
            </div>
        );
    }
}

Sort.propTypes = {
    sortIsExpanded: PropTypes.bool.isRequired,
    invertSortIsExpanded: PropTypes.func.isRequired
}

const mapStateToProps = ({ layout }) => ({
    sortIsExpanded: layout.sortIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    invertSortIsExpanded: () => dispatch(invertSortIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);