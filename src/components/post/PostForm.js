import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Collapse } from 'react-collapse';
import { openPostIsExpanded } from '../../actions/layout';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.generateField = this.generateField.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
    }

    generateField(type, name, placeholder) {
        return (
            <div>
                <Field 
                    name={name} 
                    component={type} 
                    type="text"
                    placeholder={placeholder}
                    autocomplete="off"
                    onFocus={this.onInputFocus}
                    className="post-input input-text marg-b-sm" 
                />
            </div>
        );
    }

    onInputFocus() {
        console.log('Input focused');
        this.props.openPostIsExpanded();
    }

    render() {
        const { handleSubmit, postIsExpanded } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                {this.generateField(
                    'input',
                    'title', 
                    'Enter a title'
                )}
                {/* {postIsExpanded && 
                this.generateField(
                    'description', 
                    'Enter a description'
                )} */}
                <Collapse isOpened={postIsExpanded}>
                    <Field
                        name="description"
                        component="textarea"
                        placeholder="Enter a description"
                        onFocus={this.onInputFocus}
                        className="post-textarea textarea marg-b-sm"
                    />
                </Collapse>
                <div className="wrapper-flex">
                    <Field 
                        name="pay" 
                        component="input" 
                        type="text"
                        placeholder="Enter an offer amount"
                        autocomplete="off"
                        onFocus={this.onInputFocus}
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

const mapStateToProps = ({ layout }) => ({
    postIsExpanded: layout.postIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    openPostIsExpanded: () => dispatch(openPostIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'post'})(PostForm));