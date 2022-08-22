import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Styles from '../resources/styles/Styles';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonText: this.props.text,
            activeColor: this.props.active ? Styles.activeColor: Styles.mainColor
        }
    }

    handleClick() {
        this.props.handler();
    }

    render() {
        return(
            <TouchableOpacity
                onPress ={ () => this.handleClick() }
                style={ [Styles.button, { backgroundColor: this.state.activeColor }]}
            >
                <Text
                    style={ Styles.buttonText }>
                        { this.state.buttonText }
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Button;