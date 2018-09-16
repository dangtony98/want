import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.generateField = this.generateField.bind(this);
    }

    generateField(name, label, placeholder) {
        return (
            <div>
                <label 
                    htmlFor={name}
                    className="label-block"
                >{label}</label>
                <Field 
                    name={name} 
                    component="input" 
                    type="text"
                    placeholder={placeholder}
                    autocomplete="off"
                    className="post-input input-text" 
                />
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                {this.generateField(
                    'title', 
                    'Title',
                    'Enter a title'
                )}
                <label 
                    htmlFor={name}
                    className="label-block"
                >Offer</label>
                <div className="wrapper-flex">
                    <Field 
                        name="pay" 
                        component="input" 
                        type="text"
                        placeholder="Enter an initial pay offer"
                        autocomplete="off"
                        className="post-input input-text" 
                    />
                    <button
                        type="submit"
                        className="post-button button-shaded"
                    >Post</button>  
                </div>
            </form>
        );
    }
}

export default reduxForm({form: 'post'})(PostForm);