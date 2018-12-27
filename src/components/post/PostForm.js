import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Collapse } from 'react-collapse';
import { animateScroll as scroll } from 'react-scroll';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { openPostIsExpanded } from '../../actions/layout';
import { post } from '../../services/api/post';

import numeral from 'numeral';

const select = {
    options: [
        { value: 1, label: 'Purchase & Delivery' },
        { value: 2, label: 'Home Services' },
        { value: 3, label: 'Freelance' },
        { value: 4, label: 'Transportation' },
        { value: 5, label: 'Education' },
        { value: 6, label: 'Entertainment' },
        { value: 7, label: 'Other' },
    ],
    styles: {
        control: (base, state) => ({
            ...base,
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

class PostForm extends Component {
    constructor(props) {
        super(props);
        
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);

        this.state = {
            title: '',
            cost: '',
            description: '',
            category: null
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const { title, cost, description, category } = this.state;
        if (title != '' && cost != '' && description != '' && category != null) {
            // SEND POST REQUEST TO SUBMIT WANT
            post({
                    ...this.state,
                    cost: numeral(numeral(`$${this.state.cost}`).format('$0,0.00'))._value,
                    category: this.state.category.value
                }, scroll, () => {
                    this.setState({
                        title: '',
                        cost: '',
                        description: '',
                        category: null
                    });
                });
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeSelect(e) {
        this.setState({
            ...this.state,
            category: e
        });
    }

    onInputFocus() {
        this.props.openPostIsExpanded();
    }

    render() {
        const { postIsExpanded } = this.props;
        const { title, cost, description, category } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="title"
                    value={title}
                    onChange={this.handleChange} 
                    onFocus={this.onInputFocus}
                    type="text"
                    placeholder="Enter a title"
                    autoComplete="off"
                    className="post-input input-text"
                    required
                />
                <Collapse isOpened={postIsExpanded}>
                    <Select
                        value={category}
                        options={select.options}
                        onChange={this.handleChangeSelect}
                        styles={select.styles}
                        className="select marg-t-sm" 
                        required
                    />
                    <textarea
                        name="description"
                        value={description}
                        onChange={this.handleChange} 
                        type="text"
                        placeholder="Enter a description"
                        autoComplete="off"
                        className="post-textarea textarea marg-t-sm"
                        required
                    />
                </Collapse>
                <div className="wrapper-flex wrapper-flex--center marg-t-sm">
                    <input
                        name="cost"
                        value={cost}
                        onChange={this.handleChange} 
                        type="number"
                        step="0.01"
                        pattern="^\d*(\.\d{0,2})?$"
                        placeholder="Enter an offer"
                        autoComplete="off"
                        className="post-input input-text"
                        required
                    />
                    <button
                        type="submit"
                        className="button-shaded marg-l-sm"
                    >Post</button>  
                </div>
            </form>
        );
    }
}

PostForm.propTypes = {
    postIsExpanded: PropTypes.bool.isRequired,
    openPostIsExpanded: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

const mapStateToProps = ({ layout }) => ({
    postIsExpanded: layout.postIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    openPostIsExpanded: () => dispatch(openPostIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'post' })(PostForm));