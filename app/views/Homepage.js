import React, { Component } from 'react';
import { Image, ImageBackground, View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import HeaderImage from '../components/HeaderImage';
import * as Styles from '../resources/styles/Styles';
import Button from '../components/Button';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import DetailPage from './DetailPage';


class Homepage extends Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            months: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
            isLoaded: false,
            isError: false,
            data: this.props.data.data,
            showAgenda: true,
            timeout: false,
            navigation: this.props.navigation
        }

        this.headerImageClick = this.headerImageClick.bind(this);
        this.buttonAgendaClicked = this.buttonAgendaClicked.bind(this);
        this.buttonFavoriteClicked = this.buttonFavoriteClicked.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    headerImageClick() {
        this.setState({
            showAgenda: false
        })
    }

    handleConcertClick(record) {
        
        // console.log('r')
        this.props.navigation.navigate('DetailPage', {record: record})
        // return(
        //     <DetailPage />
        //     <NavigationContainer>
        //         <Stack.Navigator screenOptions={{headerShown: false}}>
        //         <Stack.Screen name="Detail">
        //             {(props) => <DetailPage {...props} data={this.state.data} id={id} />}
        //         </Stack.Screen>
        //         </Stack.Navigator>
        //     </NavigationContainer>
        // )
    }

    renderItem(item) {
        let record = item.item;
        var month = parseInt(record.performanceDate.slice(3, 5))
        const day = record.performanceDate.slice(0, 2)
        month = this.state.months[month - 1]
        const picture = {uri: record.artistImage}
        if(record.id % 2 == 0) {
            return(
                <TouchableOpacity onPress={ () => this.handleConcertClick(record)}>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#7B7B7B', borderBottomWidth: 1 }}>
                        <View style={{ width: '68%', alignItems: 'flex-end', marginRight: 3, marginTop: 3}}>
                            <Text style={ Styles.artistName }>{record.artistName}</Text>
                            <Text style={ Styles.artistDoor }>Doors open: <Text style={{fontWeight: 'bold', color: '#FFF'}}>{record.doorsOpen}</Text></Text>
                            <Text style={ Styles.artistDoor }>Tickets: <Text style={{fontWeight: 'bold', color: '#FFF'}}>{record.entranceFee}</Text></Text>
                        </View>
                        <View style={{ width: '16%'}}>
                            <Image
                                source={ picture }
                                style={ Styles.renderItemImage }
                            />
                        </View>
                        <View style={ Styles.renderItemDate }>
                            <Text style={Styles.renderItemDay}>{day}</Text>
                            <Text style={Styles.renderItemMonth}>{month}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return(
                <TouchableOpacity onPress={ () => this.handleConcertClick(record)}>
                    <View style={{ flexDirection: 'row', borderBottomColor: '#7B7B7B', borderBottomWidth: 1 }}>
                        <View style={ Styles.renderItemDate }>
                            <Text style={Styles.renderItemDay}>{day}</Text>
                            <Text style={Styles.renderItemMonth}>{month}</Text>
                        </View>
                        <View style={{ width: '16%', flexDirection: 'row'}}>
                            <Image
                                source={ picture }
                                style={ Styles.renderItemImage }
                            />
                        </View>
                        <View style={{ width: '68%', alignItems: 'flex-start', marginLeft: 3, marginTop: 3 }}>
                            <Text style={ Styles.artistName }>{record.artistName}</Text>
                            <Text style={ Styles.artistDoor }>Doors open: <Text style={{fontWeight: 'bold', color: '#FFF'}}>{record.doorsOpen}</Text></Text>
                            <Text style={ Styles.artistDoor }>Tickets: <Text style={{fontWeight: 'bold', color: '#FFF'}}>{record.entranceFee}</Text></Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    renderLists() {
        if(this.state.showAgenda) {

            return(
                <FlatList
                    data={ this.state.data }
                    renderItem={ (item) => this.renderItem(item) }
                    keyExtractor={ item => item.id.toString() }
                />
                
            )
        }
    }

    buttonAgendaClicked() {
        this.setState({
            showAgenda: true
        })
    }

    buttonFavoriteClicked() {
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
                    { this.renderLists() }
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

export default Homepage;