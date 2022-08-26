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
            record: this.props.route.params.record,
            timeout: false
        }
        // console.log(' - constructor - ')
        // console.log(this.state)

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
        console.log(this.state.record)
    }
    
    buttonFavoriteClicked() {
        console.log(this.state)
    }

    renderRecord() {
        const record = this.state.record
        const picture = {uri: record.artistImage}
        return(
            <View style={{borderBottomColor: '#7B7B7B', borderBottomWidth: 1, alignItems: 'center' }}>
                <View>
                    <Text style={ Styles.artistName }>{record.artistName}</Text>
                    <Text style={ Styles.artistDoor }>Doors open: <Text style={{fontWeight: 'bold', color: '#FFF'}}>{record.doorsOpen}</Text></Text>
                    <Text style={ Styles.artistDoor }>Tickets: <Text style={{fontWeight: 'bold', color: '#FFF'}}>{record.entranceFee}</Text></Text>
                    <Text style={ {fontStyle: 'Georgia', fontSize: 16, color: '#FFF'} }>{record.artistDescription}</Text>
                </View>
                <View>
                    <Image
                        source={ picture }
                        style={ {width: 227, height: 227} }
                    />
                </View>
            </View>
            
        )
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
                    { this.renderRecord() }
                    {/* <Image
                    source={ picture }
                    /> */}
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