import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import { animateScroll as scroll } from 'react-scroll';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { openPostIsExpanded } from '../../actions/layout';
import { post } from '../../services/api/post';
import { updateFeed } from '../../actions/feed';
import { getFeed } from '../../services/api/feed';
import { getCategories } from '../../services/api/filter';
import numeral from 'numeral';

const select = {
    options: [
        { value: 1, label: 'Purchase & Delivery' },
        { value: 2, label: 'Home Services' },
        { value: 3, label: 'Freelance' },
        { value: 4, label: 'Transportation' },
        { value: 5, label: 'Education' },
        { value: 6, label: 'Entertainment' },
        { value: 7, label: 'Other' }
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
            options: [],
            chosen: {
                title: '',
                cost: '',
                description: '',
                category: null
            },
            elements: {
                textarea: {
                    charactersRemaining: null
                }
            }
        }
    }

    componentDidMount() {
        let selectOptions = [];

        getCategories((categories) => {
            categories.forEach((category) => {
                const option = { value: category.id, label: category.name };
                selectOptions.push(option);
            });
        });
        this.setState({
            ...this.state,
            options: selectOptions
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        const { title, cost, description, category } = this.state.chosen;
        if (title != '' && cost != '' && description != '' && category != null) {
            post({
                    ...this.state.chosen,
                    cost: numeral(numeral(`$${this.state.chosen.cost}`).format('$0,0.00'))._value * 100,
                    category: this.state.chosen.category.value
                }, () => {
                    this.setState({
                        ...this.state,
                        chosen: {
                            title: '',
                            cost: '',
                            description: '',
                            category: null
                        }
                    });
                    scroll.scrollToTop();
                    getFeed(this.props);
                });
        }
    }

    handleChange(e) {
        let value = e.target.value;
        if (e.target.name == 'cost') {
            if (value.split('.').length == 1) {
                this.setState({
                    ...this.state,
                    chosen: {
                        ...this.state.chosen,
                        [e.target.name]: value
                    }
                });
            } else if (value.split('.').length == 2) {
                if (value.split('.')[1].length <= 2) {
                    this.setState({
                        ...this.state,
                        chosen: {
                            ...this.state.chosen,
                            [e.target.name]: value
                        }
                    });
                }
            }
        } else {
            this.setState({
                ...this.state,
                chosen: {
                    ...this.state.chosen,
                    [e.target.name]: value
                }
            });
        }
    }

    handleChangeSelect(e) {
        this.setState({
            ...this.state,
            chosen: {
                ...this.state.chosen,
                category: e
            }
        });
    }

    onInputFocus() {
        this.props.openPostIsExpanded();
    }

    render() {
        const { postIsExpanded } = this.props;
        const { title, cost, description, category } = this.state.chosen;
        const { options } = this.state;
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
                    {options.length != 0 && 
                        <Select
                            value={category}
                            options={options}
                            onChange={this.handleChangeSelect}
                            styles={select.styles}
                            className="select marg-t-sm" 
                            required
                        />
                    }
                    
                    <textarea
                        name="description"
                        value={description}
                        onChange={this.handleChange} 
                        type="text"
                        placeholder="Enter a description"
                        autoComplete="off"
                        className="post-textarea textarea marg-t-sm"
                        maxLength="500"
                        required
                    />
                    {/* <h4 className="want-text">{this.state.elements.textarea.charactersRemaining} characters remaining</h4> */}
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
                        min="0"
                        max="100"
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
    updateFeed: PropTypes.func.isRequired
}

const mapStateToProps = ({ layout }) => ({
    postIsExpanded: layout.postIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    openPostIsExpanded: () => dispatch(openPostIsExpanded()),
    updateFeed: (feed) => dispatch(updateFeed(feed))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);