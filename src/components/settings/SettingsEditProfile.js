import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadAvatar } from '../../services/api/settings';

export class SettingsEditProfile extends Component {
    constructor(props) {
        super(props);

        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email,
            subtitle: this.props.subtitle,
            description: this.props.description,
            photo: null
        }
    }

    handleUploadFile(e) {
        this.setState({
            photo: e.target.files[0]
        }, () => {
            const { photo } = this.state;
            const data = new FormData();
            
            data.append('avatar', photo);
            uploadAvatar(data);
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        // SEND POST REQUEST TO UPDATE PROFILE SETTINGS
        // IF SUCCESSFUL RESPONSE, UPDATE ADMIN REDUCER WITH UPDATED INFO
    }
    
    render() {
        const { photo } = this.props;
        const { first_name, last_name, email, subtitle, description } = this.state;
        return (
            <div className="settings-edit-profile">
                <form onSubmit={this.onFormSubmit}>
                    <div className="settings-content">
                        <h4 className="content-heading">Profile Photo</h4>
                        <div className="settings-content__box wrapper-flex wrapper-flex--center">
                            <img
                                src={photo}
                                className="settings-edit-profile__photo marg-r-sm"
                            />
                            <div className="settings-edit-profile__upload-box">
                                <label
                                    htmlFor="profile-photo-upload" 
                                    className="settings-edit-profile__upload-label"
                                >
                                    Upload new photo
                                </label>
                            </div>
                            <input
                                name="photo" 
                                type="file"
                                id="profile-photo-upload"
                                onChange={this.handleUploadFile}
                                accept="image/png, image/jpeg"
                                className="input-file" 
                            />
                        </div>
                    </div>
                    <div className="settings-content">
                        <h4 className="content-heading">Required</h4>
                        <div className="settings-content__box">
                            <input
                                name="firstName"
                                value={first_name}
                                onChange={this.handleChange} 
                                type="text"
                                placeholder="Enter your first name" 
                                className="input-text settings-input"
                                required 
                            />
                            <input 
                                name="lastName"
                                value={last_name} 
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Enter your last name" 
                                className="input-text settings-input marg-t-sm"
                                required 
                            />
                            <input
                                name="email" 
                                value={email}
                                onChange={this.handleChange} 
                                type="email"
                                placeholder="Enter your email" 
                                className="input-text settings-input marg-t-sm"
                                required 
                            />
                        </div>
                    </div>
                    <div className="settings-content">
                        <h4 className="content-heading">Public Profile</h4>
                        <div className="settings-content__box">
                            <input 
                                name="subtitle"
                                value={subtitle}
                                onChange={this.handleChange} 
                                type="text"
                                placeholder="Enter a subtitle" 
                                className="input-text settings-input"
                                required 
                            />
                            <textarea
                                name="description"
                                value={description}
                                onChange={this.handleChange} 
                                type="textarea"
                                placeholder="Enter a description" 
                                className="textarea settings-textarea marg-t-sm"
                                required 
                            />
                        </div>
                    </div>
                    <div className="settings-update wrapper-flex-spaced">
                        <div></div>
                        <button type="submit" className="button-shaded">Update</button>
                    </div>
                </form>
            </div>
        );
    }
} 

const mapStateToProps = ({ admin }) => ({
    first_name: admin.first_name,
    last_name: admin.last_name,
    email: admin.email,
    subtitle: admin.subtitle,
    description: admin.description,
    photo: admin.photo
});

export default connect(mapStateToProps)(SettingsEditProfile);