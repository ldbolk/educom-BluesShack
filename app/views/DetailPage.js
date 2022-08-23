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
            isLoaded: false,
            isError: false,
            data: this.props.data,
            timeout: false
        }

        this.headerImageClick = this.headerImageClick.bind(this);
    }

    componentDidMount() {
        console.log('DetailcomponentDidMount')
        this.setState({
            isLoaded: true
        })
    }

    headerImageClick() {
        this.setState({
            showAgenda: false
        })
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
                            text="Agenda" 
                            handler={ this.buttonAgendaClicked }
                            active={ this.state.showAgenda }
                        />
                        <Button 
                            text="Favorites" 
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