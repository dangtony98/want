import React, { Component } from 'react';

const gridItemStyles = {
    box: {
        selected: {
            border: '1px solid #582A72',
        },
        unselected: {
            border: '1px solid #7F8C8D',
        }
    },
    text: {
        selected: {
            color: '#582A72',
            fontWeight: '700',
        },
        unselected: {
            color: '#7F8C8D',
        }
    }
};

export default class SetupGridItem extends Component {
    constructor(props) {
        super(props);

        this.onGridItemSelected = this.onGridItemSelected.bind(this);

        this.state = {
            id: this.props.id,
            selected: false
        }
    }

    onGridItemSelected() {
        this.setState((prevState) => {
            this.props.onSetupGridItemChanged({
                ...this.state
            });

            return ({
                selected: !prevState.selected
            });
        });
        
    }

    render() {
        const { title } = this.props;
        return (
            <div
                onClick={this.onGridItemSelected}
                className="setup-grid__item"
                style={this.state.selected == true ? gridItemStyles.box.selected : gridItemStyles.box.unselected}
            >
                <h4 
                    className="setup-text"
                    style={this.state.selected == true ? gridItemStyles.text.selected : gridItemStyles.text.unselected}
                >{title}</h4>
            </div>
        );
    }
}