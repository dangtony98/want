import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

export default class Sort extends Component {
    constructor(props) {
        super(props);

        this.onSortBtnPressed = this.onSortBtnPressed.bind(this);

        this.state = {
            isOpened: false
        }
    }

    onSortBtnPressed() {
        this.setState((prevState) => ({
            isOpened: !prevState.isOpened
        }));
    }

    render() {
        const { isOpened } = this.state;
        return (
            <div className="sort">
                <button
                    onClick={this.onSortBtnPressed} 
                    className="button">
                    Sort
                    { isOpened ? <i class="icon-dropdown fas fa-chevron-up"></i>
                    : <i class="icon-dropdown fas fa-chevron-down"></i>}
                    
                </button>
                <Collapse isOpened={isOpened}>
                    <div className="sort-dropdown">

                    </div>
                </Collapse>
            </div>
        );
    }
}