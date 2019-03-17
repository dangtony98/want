import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar';
import { getWant } from '../../services/api/want';

export default class WantPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            want: null
        }
    }

    componentDidMount() {
        getWant(this.props.match.params.id, (response) => {
            this.setState({
                ...this.state,
                want: response.data.want
            });
        });
    }

    render() {
        const { want } = this.state;
        return (
            <div className="want-page">
                <NavigationBar />
                {want && (
                    <div>
                        {`Want is here with id: ${want.id} and title: ${want.title}`}
                    </div>
                )}
            </div>
        )
    }
}