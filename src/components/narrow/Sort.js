import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { invertSortIsExpanded } from '../../actions/layout';

const select = {
    filter: {
        name: 'filter',
        options: [
            { value: 1, label: 'None' },
            { value: 2, label: 'Purchase & Delivery' },
            { value: 3, label: 'Home Services' },
            { value: 4, label: 'Freelance' },
            { value: 5, label: 'Transportation' },
            { value: 6, label: 'Education' },
            { value: 7, label: 'Entertainment' },
            { value: 8, label: 'Other' },
        ]
    },
    sort: {
        name: 'sort',
        options: [
            { value: 1, label: 'None' },
            { value: 2, label: 'Newest' },
            { value: 3, label: 'Oldest' },
            { value: 4, label: 'Pay (High-Low)' },
            { value: 5, label: 'Pay (Low-High)' }
        ]
    },
    styles: {
        control: (base, state) => ({
            ...base,
            width: '300px',
            outline: 'none',
            padding: '0 10px 0 10px',
            color: '#BDC3C7',
            background: '#fff',
            border: state.isFocused ? '1px solid #582A72' : '1px solid #BDC3C7',
            borderColor: state.isFocused ? '#582A72' : '#BDC3C7',
            "&:hover": {
                border: '1px solid #BDC3C7'
              }
        }),
        option: (base, state) => ({
            ...base,
            color: state.isFocused ? '#fff' : '#7F8C8D',
            background: state.isFocused ? '#582A72' : '#fff',
            borderBottom: '1px solid #BDC3C7'
        })
    }
}

export class Sort extends Component {
    constructor(props) {
        super(props);

        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.onSortBtnPressed = this.onSortBtnPressed.bind(this);

        this.state = {
            filter: { value: 1, label: 'None' },
            sort: { value: 1, label: 'None' }
        }
    }

    handleChangeSelect(e, name) {
        this.setState({
            [name]: e
        }, () => {
            // SEND POST REQUEST CONTAINING THE COMPONENT'S STATE TO UPDATE NEWSFEED ACCORDINGLY
        });
    }

    onSortBtnPressed() {
        this.props.invertSortIsExpanded();
    }

    render() {
        const { sortIsExpanded } = this.props;
        const { filter, sort } = this.state;
        return (
            <div className="sort">
                <div className="wrapper-flex wrapper-flex--center">
                    <button
                        onClick={this.onSortBtnPressed} 
                        className="button">
                        Options
                        { sortIsExpanded ? <i className="icon-dropdown fas fa-chevron-up"></i>
                        : <i className="icon-dropdown fas fa-chevron-down"></i>}
                        
                    </button>
                    {(filter != null && filter.value != 1) && <div className="sort-tab marg-l-sm">{filter.label}</div>}
                    {(sort != null && sort.value != 1) && <div className="sort-tab marg-l-sm">{sort.label}</div>}
                </div>
                <Collapse isOpened={sortIsExpanded}>
                    <div className="sort-dropdown">
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                            <h4 className="sort-text">Filter by</h4>
                            <Select
                                value={filter}
                                options={select.filter.options}
                                onChange={(e) => this.handleChangeSelect(e, select.filter.name)}
                                styles={select.styles}
                                className="select" 
                                required
                            />
                        </div>
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center marg-t-sm">
                            <h4 className="sort-text">Sort by</h4>
                            <Select
                                value={sort}
                                options={select.sort.options}
                                onChange={(e) => this.handleChangeSelect(e, select.sort.name)}
                                styles={select.styles}
                                className="select" 
                                required
                            />
                        </div>
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