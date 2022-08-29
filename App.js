import React, { Component, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import * as Styles from './app/resources/styles/Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './app/views/Homepage';
import DetailPage from './app/views/DetailPage'
import API from './app/lib/API';

// import db from './FirebaseConfig';
import {app} from './FirebaseConfig'
import { getFirestore, collection, doc, query, where, onSnapshot, getDoc, getDocs } from '@firebase/firestore'
const db = getFirestore(app);


// import userSnapshot from './app/lib/firebaseGets'


// import { initializeApp } from "firebase/app";
// import { getFirestore, getDocs, query, where } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyC6axchnIfJDXD11QgAMRrpBhm0r2rGm08",
//   authDomain: "bluesshack-6bc03.firebaseapp.com",
//   projectId: "bluesshack-6bc03",
//   storageBucket: "bluesshack-6bc03.appspot.com",
//   messagingSenderId: "600045252144",
//   appId: "1:600045252144:web:6e1fbf2f88c3c5ce56c7f5"
// };



const Stack = createNativeStackNavigator();

// const artistRef = collection(db, 'Artist');
// const q = query(artistRef, where('artistName', '==', 'Big Creek Slim'))

// onSnapshot(artistRef, (snapshot) => {
//   let books = []
//   snapshot.docs.forEach((doc) => {
//     books.push({ ...doc.data(), id: doc.id })
//   })
//   console.log(books)
//   return books;
// })




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false,
      timeout: false,
      data: {},
      favorites: {}
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }


  // async getTest() {
  //   const test = [];
  //   await collection(db, 'Artist').get()
  //   .then(querySnapshot => {
  //     querySnapshot.docs.forEach(doc => {
  //       test.push(doc.data())
  //     })
  //   }) useEffect( () => {

  //  })

  //   console.log(test)
  // }

  // useEffect = (() => {
  //   const artistRef = collection(db, 'Artist');

  //   const w = onSnapshot(artistRef, (snapshot) => {
  //     let books = []
  //     snapshot.docs.forEach((doc) => {
  //         books.push({ ...doc.data(), id: doc.id })
  //       })
  //     this.state.favorites(books)
  //     console.log('books', books)
  //   })

  //   return() => w()
  // }, []);
    


  // useEffect = (() => {
  //   const artistRef = collection(db, 'Artist');

  //   const w = onSnapshot(artistRef, (snapshot) => {
  //     let books = []
  //     snapshot.docs.forEach((doc) => {
  //         books.push({ ...doc.data(), id: doc.id })
  //       })
  //       console.log('books', books)
  //       this.setState({
  //         favorites: books
  //       })
  //     this.state.favorites(books)
  //   })

  //   return() => w()
  // }, []);

    fetchData() {
      
    const userRef = collection(db, 'Users');
    const artistRef = collection(db, 'Artist')
    const q = query(userRef, where('Name', '==', 'Luc'))

    onSnapshot(artistRef, (snapshot) => { 
      let artists = []
      snapshot.docs.forEach((doc) => {
        artists.push({ ...doc.data(), id: doc.id})
      })

      this.setState({
          isLoaded: true,
          isError: false,
          data: {data: artists}
      })
    })

    onSnapshot(q, (snapshot) => {
      let favorites = []
      let pathList = []
      
      snapshot.docs.forEach((doc) => {
        favorites.push({ ...doc.data(), id: doc.id })
      })
      
      favorites[0].Artists.forEach(e => {
        console.log(doc(db, e.path).artistName)
        pathList.push(e.path)
      });
      // console.log(pathList)
      
      this.setState({
        favorites: favorites
      })

    })
    

    // const artistRef = collection(db, 'Artist');
    // const userRef = collection(db, 'User');
    // const q = query(artistRef, where('Name', '==', 'Luc'))
    // const q = query(artistRef, where('artistName', '==', 'Big Creek Slim'))

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.name, ' => ', doc.data());
    // })


    // onSnapshot(artistRef, (snapshot) => {
    //     let books = []
    //     snapshot.docs.forEach((doc) => {
    //       books.push({ ...doc.data(), id: doc.id })
    //     })
    //     console.log(books)
    //     return books
    // })

    // API.getFavorites()
    // .then(res => {
    //   this.setState({
    //     favorites: res
    //   })
    //   console.log( 'App favorites = ', this.state.favorites)
    // })

    // API.fetchData()
    // .then(res => {
    //   console.log(res)
    //     this.setState({
    //         isLoaded: true,
    //         isError: false,
    //         data: res
    //     })
    // })
    // .catch(err => {
    //     this.setState({
    //         timeout: true
    //     })
    // })

  }

  renderContent() {
    if(this.state.isLoaded) {
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomePage">
              {(props) => <HomePage {...props} data={this.state.data} favorites={this.state.favorites} />}
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