import React, { Component, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import * as Styles from './app/resources/styles/Styles'

import {app} from '../../FirebaseConfig'
import { getFirestore, collection, doc, query, where, onSnapshot, getDoc, getDocs } from '@firebase/firestore'
const db = getFirestore(app);


const [favorite, setFavorite] = useState([]);
const [artists, setArtists] = useState([]);




const artistRef = collection(db, 'Artist');
const q = query(artistRef, where('Name', '==', 'Luc'))

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    console.log(doc.name, ' => ', doc.data());
})

setFavorite()



// Vragen aan René; waarop moet ik me voorbereiden voor Memic, wat moet ik weten, wat moet ik zeggen etc.