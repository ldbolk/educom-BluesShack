import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import * as Styles from './app/resources/styles/Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './app/views/Homepage';
import DetailPage from './app/views/DetailPage'
import API from './app/lib/API';

const Stack = createNativeStackNavigator();

const img = "https://picsum.photos/id/1025/4951/3301"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false,
      timeout: false,
      data: {}
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {

    API.fetchData()
    .then(res => {
        this.setState({
            isLoaded: true,
            isError: false,
            data: res
        })
    })
    .catch(err => {
        this.setState({
            timeout: true
        })
    })
  }

  renderContent() {
    if(this.state.isLoaded) {
      // console.log(this.state.data)
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomePage">
              {(props) => <HomePage {...props} data={this.state.data} />}
            </Stack.Screen>
            <Stack.Screen name="DetailPage">
              {(props) => <DetailPage {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>

      )
    }

    if(this.state.isError) {
      return(
        <View>
          <Text>
            An error happened
          </Text>
        </View>
      )
    }

    return(
    <View>
      <Text>
        Loading...
      </Text>
    </View>)
  }

  render() {
    return(
      <SafeAreaView style={ Styles.page }>
        { this.renderContent() }
      </SafeAreaView>
    )
  }
}

export default App;