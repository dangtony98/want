import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SettingsEditProfile extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            subtitle: this.props.subtitle,
            description: this.props.description,
            photo: null
        }
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
        const { firstName, lastName, email, subtitle, description } = this.state;
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
                                onChange={this.handleChange}
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
                                value={firstName}
                                onChange={this.handleChange} 
                                type="text"
                                placeholder="Enter your first name" 
                                className="input-text settings-input"
                                required 
                            />
                            <input 
                                name="lastName"
                                value={lastName} 
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
    firstName: admin.firstName,
    lastName: admin.lastName,
    email: admin.email,
    subtitle: admin.subtitle,
    description: admin.description,
    photo: admin.photo
});

export default connect(mapStateToProps)(SettingsEditProfile);