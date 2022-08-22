import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import * as Styles from './app/resources/styles/Styles'

const img = "https://picsum.photos/id/1025/4951/3301"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false,
      data: {}
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      isLoaded: true,
      isError: false,
      data: {}
    })
  }

  renderContent() {
    if(this.state.isLoaded) {
      return(
        <View>
          <Text style={ Styles.regularText }>
            The content of the page
          <Image source={{uri: img}} style={{height:300, width: 300}}/>
          </Text>
        </View>
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