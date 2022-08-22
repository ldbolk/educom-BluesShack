import React, { Component } from 'react';
import { Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import * as Styles from '../resources/styles/Styles';

class HeaderImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: { uri: this.props.image },
            fromHomepage: this.props.fromHomepage === true
        }
    }

    handleClick() {
        this.props.handler()
    }

    renderImage() {
        return(
            <ImageBackground
                source={ this.state.image }
                style={ Styles.headerImage }
            />
        )
    }

    renderContent() {
        if(this.state.fromHomepage) {
            return(
                <TouchableOpacity onPress={ () => this.handleClick() }>
                    { this.renderImage() }
                </TouchableOpacity>
            )
        }
        return(this.renderImage());
    }

    render() {
        return(
            <React.Fragment>
                { this.renderContent() }
            </React.Fragment>
        )
    }
}

export default HeaderImage;