import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import HeaderImage from '../components/HeaderImage';
import * as Styles from '../resources/styles/Styles';
import Button from '../components/Button';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isError: false,
            data: this.props.data.data,
            showAgenda: true,
            timeout: false
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

    renderItem(item) {
        let record = item.item;
        console.log(record.artistName)
        return(
            <View>
                <Text style={ {fontSize: 22, color: '#FFF', textAlign: 'center', textAlignVertical: 'center'} }>{record.artistName}</Text>
            </View>
        )
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
                    {/* <HeaderImage
                        fromHomepage={ true }
                        handler={ this.headerImageClick }
                        image="https://api.dev-master.ninja/assets/blues-shack/big-creek-slim.jpg"
                    /> */}
                    {/* <View style={ Styles.buttonBar }>
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
                    </View> */}

            </View>
        )
    }
}

export default Homepage;