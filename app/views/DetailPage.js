import React, { Component } from 'react';
import { Image, ImageBackground, View, Text, SafeAreaView, FlatList } from 'react-native';
import HeaderImage from '../components/HeaderImage';
import * as Styles from '../resources/styles/Styles';
import Button from '../components/Button';
import picture from '../../assets/cat.png'


class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isError: false,
            data: this.props.data,
            id: this.props.route.params.id,
            timeout: false
        }
        console.log(' - constructor - ')
        console.log(this.state)

        this.headerImageClick = this.headerImageClick.bind(this);
        this.buttonFavoriteClicked = this.buttonFavoriteClicked.bind(this);
        this.buttonTicketsClicked = this.buttonTicketsClicked.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    headerImageClick() {
        this.props.navigation.navigate('HomePage')
    }

    buttonTicketsClicked() {
        console.log(this.state.id)
    }
    
    buttonFavoriteClicked() {
        console.log(this.state)
    }

    renderContent() {
        if(this.state.isLoaded) {
            return(
                <View style={{ flex: 1} }>
                    <HeaderImage
                        fromHomepage={ true }
                        handler={ this.headerImageClick }
                        image="https://api.dev-master.ninja/assets/blues-shack/big-creek-slim.jpg"
                    />
                    <Image
                    source={ picture }
                    />
                    <View style={ Styles.buttonBar }>
                        <Button 
                            text="Tickets" 
                            handler={ this.buttonTicketsClicked }
                            active={ this.state.showAgenda }
                        />
                        <Button 
                            text="<3" 
                            handler={ this.buttonFavoriteClicked }
                            active={ this.state.showAgenda }
                        />
                    </View>
                </View>
            )
        }
    }


    render() {
        return(
            <View style={ Styles.page}>
                { this.renderContent() }
            </View>
        )
    }

}

export default DetailPage;