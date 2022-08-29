// // import db from './FirebaseConfig';
// import {app} from '../../FirebaseConfig'
// import { getFirestore, collection, query, where, onSnapshot } from '@firebase/firestore'
// const db = getFirestore(app);

// const artistRef = collection(db, 'Artist');
// const q = query(artistRef, where('artistName', '==', 'Big Creek Slim'))
// const artistData = onSnapshot(artistRef)
// console.log(artistData)

// onSnapshot(artistRef, (snapshot) => {
//   let books = []
//   snapshot.docs.forEach((doc) => {
//     books.push({ ...doc.data(), id: doc.id })
//   })
//   console.log(books)
//   return books;
// })

// export default onSnapshot;

// const artistRef = collection(db, 'Artist');
// // const userRef = collection(db, 'User');
// const q = query(artistRef, where('Name', '==', 'Luc'))
// // const q = query(artistRef, where('artistName', '==', 'Big Creek Slim'))

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

// import React, { useState, useEffect } from 'react';
// import {app} from './FirebaseConfig'
// import { getFirestore, collection, query, where, onSnapshot, getDocs } from '@firebase/firestore'
// const db = getFirestore(app);


// export default function userSnapshot() {

//   const q = query(artistRef, where('Name', '==', 'Luc'))
//   // const q = query(artistRef, where('artistName', '==', 'Big Creek Slim'))

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     console.log(doc.name, ' => ', doc.data());
//   }) 

// }