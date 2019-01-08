import React, { Component } from 'react';
import { changePassword } from '../../services/api/settings';

export default class SettingsSecurity extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();

        const { newPassword, confirmPassword } = this.state;
        if (newPassword == confirmPassword) {
            // SEND POST REQUEST TO UPDATE PASSWORD
            const { oldPassword, newPassword } = this.state;
            changePassword({
                'current-password': oldPassword,
                'new-password': newPassword
            }, () => {
                this.setState({
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''                
                });
            });
        } else {
            // THROW ERROR MESSAGE BECAUSE NEW PASSWORD != CONFIRM PASSWORD
        }
    }

    render() {
        const { oldPassword, newPassword, confirmPassword } = this.state;
        return (
            <div className="settings-security">
                <form onSubmit={this.onFormSubmit}>
                    <div className="settings-content">
                        <h4 className="content-heading">Change Your Password</h4>
                        <div className="settings-content__box">
                            <input
                                name="oldPassword"
                                value={oldPassword}
                                onChange={this.handleChange} 
                                type="password"
                                placeholder="Enter your old password" 
                                className="input-text settings-input"
                                required 
                            />
                            <input 
                                name="newPassword"
                                value={newPassword} 
                                onChange={this.handleChange}
                                type="password"
                                placeholder="Enter a new password" 
                                className="input-text settings-input marg-t-sm"
                                required 
                            />
                            <input
                                name="confirmPassword" 
                                value={confirmPassword}
                                onChange={this.handleChange} 
                                type="password"
                                placeholder="Retype the new password" 
                                className="input-text settings-input marg-t-sm"
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