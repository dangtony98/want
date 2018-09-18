import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import PostForm from './PostForm';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.onPostSubmit = this.onPostSubmit.bind(this);
    }
    
    onPostSubmit(formContent) {
        console.log(formContent);
        scroll.scrollToTop();
    }

    render() {
        return (
            <div className="post">
                <h4>Post a Want</h4>
                <div className="post-box">
                    <PostForm onSubmit={this.onPostSubmit} />
                </div>
            </div>
        );
    }
}