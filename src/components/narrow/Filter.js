import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    onSearchTyped(e) {
        const searchTerm = e.target.value;
        this.props.updateSearchTerm(searchTerm);
    }

    render() {
        const { searchTerm } = this.props;
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
                    onChange={this.onSearchTyped}
                    placeholder="Search for a Want to fulfill"
                    autoComplete="off"
                    className="filter-search input-text"
                ></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter);