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
        const { admin_id, photo } = this.props;
        return (
            <div className="wrapper-flex wrapper-flex--top">
                {/* <Link to={`/profile/${admin_id}`} target="_blank" className="link"> */}
                    <img 
                        src={photo}
                        className="profile-picture--mini marg-r-sm"
                    />
                {/* </Link> */}
                <Textarea 
                    minRows={1}
                    maxRows={3}
                    value={wantInput}
                    onKeyDown={this.onEnterPressed}
                    onChange={this.handleTextChange}
                    placeholder="Write a comment"
                    className="want-input-textarea textarea--mini"
                    disabled={false}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ admin }) => ({
    admin_id: admin.id,
    photo: admin.photo
});

export default connect(mapStateToProps)(WantInput);