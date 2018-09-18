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
            <Field 
                name={name} 
                component={type} 
                type="text"
                placeholder={placeholder}
                autocomplete="off"
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
                {this.generateField(
                    'input',
                    'title', 
                    'Enter a title'
                )}
                <Collapse isOpened={postIsExpanded}>
                    <Field
                        name="description"
                        component="textarea"
                        placeholder="Enter a description"
                        autocomplete="off"
                        onFocus={this.onInputFocus}
                        required="true"
                        className="post-textarea textarea marg-t-sm"
                    />
                </Collapse>
                <div className="wrapper-flex marg-t-sm">
                    <Field 
                        name="pay" 
                        component="input" 
                        type="text"
                        placeholder="Enter an offer amount"
                        autocomplete="off"
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

const mapStateToProps = ({ layout }) => ({
    postIsExpanded: layout.postIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    openPostIsExpanded: () => dispatch(openPostIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'post'})(PostForm));