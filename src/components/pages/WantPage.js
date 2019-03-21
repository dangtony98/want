import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar';
import WantComments from '../want/WantComments';
import WantInput from '../../components/want/WantInput';
import { Link } from 'react-router-dom';
import { getWant } from '../../services/api/want';
import moment from 'moment';
import numeral from 'numeral';
import { IMAGE_URL } from '../../services/variables/variables';
import MediaQuery from 'react-responsive';

export default class WantPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            want: null,
            admin_id: null,
            bookmark_id: null,
        }
    }

    componentDidMount() {
        getWant(this.props.match.params.id, (response) => {
            console.log('getWant() response: ');
            console.log(response.data.want);
            const admin_id = JSON.parse(localStorage.getItem('user')).id;
            this.setState({
                ...this.state,
                want: response.data.want,
                admin_id
            });
        });
    }

    render() {
        const { want } = this.state;
        const { admin_id } = this.state;
        return (
            <div className="want-page">
                <NavigationBar />
                <div className="want-content">
                    <div className="want-content__middle">
                        {want && (
                            <div>
                                <h4 className="content-heading">Want Post</h4>
                                <div className="want">
                                    <div className="wrapper-flex-spaced wrapper-flex-spaced--top">
                                        <div className="wrapper-flex wrapper-flex--center">
                                            <Link to={`/profile/${want.user.id}`} target="_blank" className="link">
                                                <img 
                                                    src={`${IMAGE_URL}/${want.user.avatar}`}
                                                    className="profile-picture"
                                                />
                                            </Link>
                                            <div className="marg-l-sm">
                                                <h4 className="want-text marg-e">
                                                    <Link to={`/profile/${want.user.id}`} target="_blank" className="want-link link">
                                                        {want.user.first_name}
                                                    </Link>
                                                </h4>
                                                <h4 className="want-text marg-e">{`${moment(want.created_at).fromNow(true)} ago`}</h4>
                                            </div>
                                        </div>
                                        {/* <button
                                            onClick={() => this.onBookmarkWantPressed(id)}
                                            className="button-icon"
                                        >
                                            {bookmark_id != null ? (
                                                <i className="icon-bookmark fas fa-bookmark"></i>
                                            ) : (
                                                <i className="icon-bookmark far fa-bookmark"></i>
                                            )}
                                        </button> */}
                                    </div>
                                    <h2 className="want__title marg-t-xs marg-b-xs">
                                        {want.title}
                                    </h2>
                                    <h4 className="want__pay">{numeral(want.cost / 100).format('$0,0.00')}</h4>
                                    <p className="want-text">
                                        {want.description}
                                    </p>
                                    <div className="wrapper-flex wrapper-flex--center">
                                        <button
                                            onClick={this.onAcceptBtnPressed} 
                                            className="button-simple marg-t-sm"
                                        >{(admin_id == want.user.id) ? 'Edit' : 'Accept'}</button>
                                        {(admin_id == want.user.id) ? 
                                            (<button
                                                onClick={() => this.onDeleteBtnPressed(id)} 
                                                className="want__counter-button button-simple marg-t-sm"
                                            >Delete</button>) : 
                                            (<button
                                            onClick={this.onCounterBtnPressed} 
                                            className="want__counter-button button-simple marg-t-sm"
                                            >Counter</button>)
                                        }
                                    </div>
                                    <hr className="hr marg-t-sm marg-b-sm"></hr>
                                    <WantComments />
                                    <hr className="hr marg-t-sm marg-b-sm"></hr>
                                    <WantInput 
                                        id={want.id}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}