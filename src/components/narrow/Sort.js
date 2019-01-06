import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import Select from 'react-select';
import { invertSortIsExpanded } from '../../actions/layout';
import { applyFilters } from '../../services/api/filter';
import { updateFeed } from '../../actions/feed';
import PropTypes from 'prop-types';

const sortStyles = {
    button: {
        selected: {
            border: '1px solid rgb(88, 42, 114)'
        },
        unselected: {
            border: '1px solid rgb(189,195,199)'
        }
    }
}

const select = {
    filter: {
        name: 'categories',
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
        name: 'sort_by',
        options: [
            { value: '', label: 'None' },
            { value: 'created_at#desc', label: 'Newest' },
            { value: 'created_at#asc', label: 'Oldest' },
            { value: 'cost#desc', label: 'Pay (High-Low)' },
            { value: 'cost#asc', label: 'Pay (Low-High)' }
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
            categories: { value: 1, label: 'None' },
            sort_by: { value: 'none', label: 'None' }
        }
    }

    handleChangeSelect(e, name) {
        this.setState({
            [name]: e
        }, () => {
            const { categories, sort_by } = this.state;
            applyFilters({
                categories: [categories.value == 1 ? '' : [categories.value]],
                sort_by: sort_by.value
            }, this.props);
            // SEND POST REQUEST CONTAINING THE COMPONENT'S STATE TO UPDATE NEWSFEED ACCORDINGLY
        });
    }

    onSortBtnPressed() {
        this.props.invertSortIsExpanded();
    }

    render() {
        const { sortIsExpanded } = this.props;
        const { categories, sort_by } = this.state;
        return (
            <div className="sort">
                <div className="wrapper-flex wrapper-flex--center">
                    <button
                        onClick={this.onSortBtnPressed} 
                        className="button"
                        style={sortIsExpanded ? sortStyles.button.selected : sortStyles.button.unselected}
                    >
                        Options
                        { sortIsExpanded ? <i className="icon-dropdown fas fa-chevron-up"></i>
                        : <i className="icon-dropdown fas fa-chevron-down"></i>}
                        
                    </button>
                    {(categories != null && categories.value != 1) && <div className="sort-tab marg-l-sm">{categories.label}</div>}
                    {(sort_by != null && sort_by.value != 'none') && <div className="sort-tab marg-l-sm">{sort_by.label}</div>}
                </div>
                <Collapse isOpened={sortIsExpanded}>
                    <div className="sort-dropdown">
                        <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                            <h4 className="sort-text">Filter by</h4>
                            <Select
                                value={categories}
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
                                value={sort_by}
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
    invertSortIsExpanded: PropTypes.func.isRequired,
    updateFeed: PropTypes.func.isRequired
}

const mapStateToProps = ({ layout }) => ({
    sortIsExpanded: layout.sortIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    invertSortIsExpanded: () => dispatch(invertSortIsExpanded()),
    updateFeed: (feed) => dispatch(updateFeed(feed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);