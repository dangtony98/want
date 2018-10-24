import React, { Component } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';
import { closePostIsExpanded } from '../../actions/layout';
import PostForm from './PostForm';

export class Post extends Component {
    constructor(props) {
        super(props);

        this.onPostSubmit = this.onPostSubmit.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    
    onPostSubmit(formContent) {
        console.log(formContent);
        scroll.scrollToTop();
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.postIsExpanded == true && this.props.form.post.values == undefined) {
            this.props.closePostIsExpanded();
        }
    }

    render() {
        return (
            <div className="post">
                <h4 className="home-content__heading">Post a Want</h4>
                <div
                    ref={this.setWrapperRef} 
                    className="post-box">
                    <PostForm onSubmit={this.onPostSubmit} />
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    postIsExpanded: PropTypes.bool.isRequired,
    form: PropTypes.object.isRequired,
    closePostIsExpanded: PropTypes.func.isRequired
}

const mapStateToProps = ({ layout, form }) => ({
    postIsExpanded: layout.postIsExpanded,
    form
});

const mapDispatchToProps = (dispatch) => ({
    closePostIsExpanded: () => dispatch(closePostIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);