import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
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
                    { sortIsExpanded ? <i class="icon-dropdown fas fa-chevron-up"></i>
                    : <i class="icon-dropdown fas fa-chevron-down"></i>}
                    
                </button>
                <Collapse isOpened={sortIsExpanded}>
                    <div className="sort-dropdown">

                    </div>
                </Collapse>
            </div>
        );
    }
}

const mapStateToProps = ({ layout }) => ({
    sortIsExpanded: layout.sortIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    invertSortIsExpanded: () => dispatch(invertSortIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);