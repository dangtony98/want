import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectSearchBox } from  'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { updateSearchTerm } from '../../actions/filter';

export class Filter extends Component {
    constructor(props) {
        super(props);
        
        this.onSearchButtonPressed = this.onSearchButtonPressed.bind(this);
        this.onSearchTyped = this.onSearchTyped.bind(this);
    }

    onSearchButtonPressed() {
        console.log('onSearchButtonPresssed() triggered');
    }

    onSearchTyped(refine, e) {
        refine(e.target.value);
        const searchTerm = e.target.value;
        this.props.updateSearchTerm(searchTerm);
    }

    render() {
        const { searchTerm, currentRefinement, refine } = this.props;
        return (
            <div className="filter">
                <button 
                    onClick={this.onSearchButtonPressed}
                    className="filter-button button-icon"
                >
                    <i className="icon-search fas fa-search"></i>
                </button>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => this.onSearchTyped(refine, e)}
                    placeholder="Search for a post or user with @"
                    autoComplete="off"
                    className="filter-search input-text"
                ></input>
                {/* <input 
                    type="text"
                    value={currentRefinement}
                    onChange={(e) => refine(e.target.value)}
                    placeholder="We are currently hooking up Algolia Search"
                    autoComplete="off"
                    className="filter-search input-text"
                /> */}
            </div>
        );
    }
}

Filter.propTypes = {
    searchTerm: PropTypes.string,
    updateSearchTerm: PropTypes.func.isRequired
}

const mapStateToProps = ({ filter }) => ({
    searchTerm: filter.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
    updateSearchTerm: (searchTerm) => dispatch(updateSearchTerm(searchTerm))
});

export default connectSearchBox(connect(mapStateToProps, mapDispatchToProps)(Filter));

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);