// import db from './FirebaseConfig';
import {app} from './FirebaseConfig'
import { getFirestore, collection, query, where, onSnapshot } from '@firebase/firestore'
const db = getFirestore(app);

const artistRef = collection(db, 'Artist');
const q = query(artistRef, where('artistName', '==', 'Big Creek Slim'))
const artistData = onSnapshot(artistRef)
console.log(artistData)

onSnapshot(artistRef, (snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id })
  })
  console.log(books)
  return books;
})

export default onSnapshot;