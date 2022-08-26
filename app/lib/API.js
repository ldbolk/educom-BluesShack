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

}

export default API;