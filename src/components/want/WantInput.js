import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';

export class WantInput extends Component {
    constructor(props) {
        super(props);
        
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);

        this.state = {
            wantInput: ""
        }
    }

    handleTextChange(e) {
        this.setState({
            ...this.state,
            wantInput: e.target.value
        });
    }

    onEnterPressed(e) {
        if(e.keyCode == 13 && e.shiftKey == false && /\S/.test(e.target.value)) {
            // SEND POST REQUEST TO COMMENT
            e.preventDefault();
            console.log('Comment on Want with id: ' + this.props.id);            
        }
    }

    render() {
        const { wantInput } = this.state;
        const { photo } = this.props;
        return (
            <div className="wrapper-flex wrapper-flex--top">
                <Link to={`/profile/2`} target="_blank" className="link">
                    <img 
                        src={photo}
                        className="want__image marg-r-sm"
                    />
                </Link>
                <Textarea 
                    minRows={1}
                    maxRows={3}
                    value={wantInput}
                    onKeyDown={this.onEnterPressed}
                    onChange={this.handleTextChange}
                    placeholder="Enter a comment"
                    className="want-input-textarea textarea"
                    disabled={false}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ admin }) => ({
    photo: admin.photo
});

export default connect(mapStateToProps)(WantInput);