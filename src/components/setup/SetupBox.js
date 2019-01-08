import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SetupGridItem from './SetupGridItem';

export class SetupBox extends Component {
    constructor(props) {
        super(props);

        this.onFinishButtonPressed = this.onFinishButtonPressed.bind(this);
        this.onSetupGridItemChanged = this.onSetupGridItemChanged.bind(this);
        this.renderGridItems = this.renderGridItems.bind(this);

        this.state = {
            selectedGridItems: []
        }
    }

    onSkipButtonPressed() {
        // DON'T SEND STATE AND REDIRECT TO HOME PAGE
        this.props.history.push("/");
    }

    onFinishButtonPressed() {
        // SEND STATE WITH AXIOS AND REDIRECT TO HOME PAGE
        this.props.history.push("/");
    }

    onSetupGridItemChanged(gridItemState) {
        this.setState((prevState) => {
            return ({
                ...this.state,
                selectedGridItems: [...prevState.selectedGridItems, gridItemState.selected]
            })
        });
    }

    renderGridItems() {
        let gridItems = [];
        const gridItemsInfo = [
            'Purchase & Delivery', 'Freelance', 
            'Cleaning', 'Driving', 'Tutoring', 'Repair'
        ];

        for(let i = 0; i < 6; i++) {
            gridItems.push(
                <SetupGridItem
                    id={`gridItem${i + 1}`} 
                    title={gridItemsInfo[i]}
                    onSetupGridItemChanged={this.onSetupGridItemChanged}
                    key={i}
                />
            );
        }

        return gridItems;
    }

    render() {
        return (
            <div className="setup-box">
                <h2 className="setup-text">Setup</h2>
                <p className="setup-text">Tailor your newsfeed by selecting categories you would be interested in fulfilling.</p>
                <div className="setup-grid">
                    {this.renderGridItems()}
                </div>
                <div className="wrapper-flex-spaced wrapper-flex-spaced--center">
                    <div></div>
                        <div className="wrapper-flex">
                            <button className="button-simple marg-r-sm">Skip</button>
                            <button 
                                onClick={this.onFinishButtonPressed}
                                className="button-shaded"
                            >Finish</button>
                        </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SetupBox);