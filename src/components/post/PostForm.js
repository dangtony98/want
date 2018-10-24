import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Collapse } from 'react-collapse';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { openPostIsExpanded } from '../../actions/layout';


const select = {
    options: [
        { value: 'purchase', label: 'Purchase & Delivery' },
        { value: 'home', label: 'Home Services' },
        { value: 'freelance', label: 'Freelance' },
        { value: 'transportation', label: 'Transportation' },
        { value: 'education', label: 'Education' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'other', label: 'Other' },
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

const renderSelectField = ({ input, options, name, id }) => (
    <Select 
        {...input}
        id={id}
        name={name}
        options={options}
        value={input.value}
        onChange={(value) => input.onChange(value)}
        onBlur={(value) => input.onBlur(value)}
        styles={select.styles}
        className="select marg-t-sm" 
    />
);

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.renderInputField = this.renderInputField.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
    }

    renderInputField(type, name, placeholder) {
        return (
            <Field 
                name={name} 
                component={type} 
                type="text"
                placeholder={placeholder}
                autoComplete="off"
                onFocus={this.onInputFocus}
                required="true"
                className="post-input input-text" 
            />
        );
    }

    onInputFocus() {
        this.props.openPostIsExpanded();
    }

    render() {
        const { handleSubmit, postIsExpanded } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                {this.renderInputField(
                    'input',
                    'title', 
                    'Enter a title'
                )}
                <Collapse isOpened={postIsExpanded}>
                    <Field
                        name="category" 
                        component={renderSelectField}
                        options={select.options} 
                    />
                    {/* <Select 
                        options={select.options}
                        styles={select.styles}
                        className="select marg-t-sm" 
                    /> */}
                    <Field
                        name="description"
                        component="textarea"
                        placeholder="Enter a description"
                        autoComplete="off"
                        onFocus={this.onInputFocus}
                        required="true"
                        className="post-textarea textarea marg-t-sm"
                    />
                </Collapse>
                <div className="wrapper-flex wrapper-flex--center marg-t-sm">
                    <Field 
                        name="offer" 
                        component="input" 
                        type="text"
                        placeholder="Enter an offer"
                        autoComplete="off"
                        onFocus={this.onInputFocus}
                        required="true"
                        className="post-input input-text" 
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