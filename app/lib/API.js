const timeout = 7000;

class API {
    static fetchData = () => new Promise( (resolve, reject) => {

        const url = "https://api.dev-master.ninja/react-native/blues-shack/get"

        const killFetch = setTimeout( () => {
            console.warm('timeout!');
            reject({ success: false, error: 'Timeout occured' })
        }, timeout);

        fetch(url)
        .then(res => res.json() )
        .then(data => {
            clearTimeout(killFetch);
            resolve({ success: true, data: data });
        })
        .catch(err => {
            clearTimeout(killFetch);
            reject({ success: false, error: err });
        })
    })

    // static getFavorites = () => new Promise( (resolve, reject) => {
    //     const artistRef = collection(db, 'Artist');
    //     const q = query(artistRef, where('Name', '==', 'Luc'))
    //     // const q = query(artistRef, where('artistName', '==', 'Big Creek Slim'))
    //     const favoriteList = []
    //     // const querySnapshot = getDocs(q)
    //     getDocs(artistRef)
    //     .then(res => {
    //         console.log(res)
    //         res.forEach((doc) => {
    //             favoriteList.push(doc)
    //         })
    //     })
        // console.log('wooooooooooooooooooooooooooooooooooooo', querySnapshot)
        // querySnapshot.forEach((doc) => {
        //     favoriteList.push(doc)
        // })

        // onSnapshot(q, (snapshot) => {
        //     let books = []
        //     snapshot.docs.forEach((doc) => {
        //         books.push({ ...doc.data(), id: doc.id })
        //     })
        //     console.log(books)
        //     return books
        // })

        // resolve({success: true, data: favoriteList})
        // if( q == undefined ) {
        //     reject({ success: false})
        // }
    // })

}

export default API;