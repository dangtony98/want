import React, { Component } from 'react';
import recombee from 'recombee-js-api-client';
import { Link } from 'react-router-dom';
import NavigationBar from '../navigation/NavigationBar';
import WantComment from '../../components/want/WantComment';
import WantInput from '../../components/want/WantInput';
import { client } from '../../app';
import { getWant } from '../../services/api/want';
import moment from 'moment';
import numeral from 'numeral';
import { IMAGE_URL } from '../../services/variables/variables';

export default class WantPage extends Component {
    constructor(props) {
        super(props);

        this.appendComment = this.appendComment.bind(this);

        this.state = {
            want: null,
            admin_id: null,
            bookmark_id: null,
            collapsedComments: false,
            startTime: null
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
                admin_id,
                startTime: new Date()
            });
            
            client.send(new recombee.AddDetailView(String(admin_id), String(this.props.match.params.id), {
                'timestamp': new Date()
            }), () => {
                console.log('Recombee Want view ABC');
            });
        });
    }

    componentWillUnmount() {
        const { startTime } = this.state;
        const admin_id = JSON.parse(localStorage.getItem('user')).id;

        // timeElapsed is in seconds.
        // const timeElapsed = Math.round((new Date() - startTime) / 1000);

        // client.send(new recombee.AddDetailView(String(admin_id), String(this.props.match.params.id), {
        //     'timestamp': new Date(),
        //     'duration': timeElapsed
        // }), () => {
        //     console.log('Recombee Want view ')
        // });
    }

    toggleCollapse() {
        this.setState((prevState) => ({
            ...this.state,
            collapsedComments: !prevState.collapsedComments
        }));
    }

    appendComment(comment) {
        this.setState({
            ...this.state,
            want: {
                ...this.state.want,
                comments: [...this.state.want.comments, comment]
            }
        });
    }

    render() {
        const { admin_id, want, collapsedComments } = this.state;
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
                                    {/* {(want.comments.length > 0) && (
                                        <button
                                            onClick={this.toggleCollapse}
                                            className="button-simple link marg-l-xs"
                                        ></button>
                                    )} */}
                                    {!collapsedComments && (
                                        want.comments.map((comment) => (
                                            <WantComment 
                                                comment={comment}
                                                wantId={want.id}
                                                key={comment.id}
                                            />
                                        ))
                                    )}
                                    <WantInput
                                        reply={false} 
                                        wantId={want.id}
                                        appendComment={this.appendComment}
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