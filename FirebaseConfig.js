// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6axchnIfJDXD11QgAMRrpBhm0r2rGm08",
  authDomain: "bluesshack-6bc03.firebaseapp.com",
  projectId: "bluesshack-6bc03",
  storageBucket: "bluesshack-6bc03.appspot.com",
  messagingSenderId: "600045252144",
  appId: "1:600045252144:web:6e1fbf2f88c3c5ce56c7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore(app); // Breng naar component -- useEffect. Functiecomponent is makkelijker - 
export {app}


// export async function getArtists(db) {
//     const artistCol = collection(db, 'Artist');
//     const artistSnapshot = await getDocs(artistCol)
//     const artistList = artistSnapshot.docs.map(doc => doc.data())
//     return artistList
// }



// Download previous version 
// imports still not working?
// Collection argument error
// Export/import error
// Removing lite from the import worked???