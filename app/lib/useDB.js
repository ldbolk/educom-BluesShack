import {useEffect, useState} from 'react'
import { onSnapshot } from 'firebase/firestore'

const useDatabase = (contentQuery) => {

    const [data, setData] = useState(null)
    const [isLoaded, setLoaded] = useState(false)

    useEffect( () => {
        const unsubscribe = onSnapshot(contentQuery, (querySnapshot) => {
            const cList = []
            querySnapshot.forEach((doc) => {
                cList.push( { id: doc.id, data: doc.data() })
            })
            const dList = cList.sort( (a, b) => a.data.order - b.data.order)
            setData(dList)
            setLoaded(true)
        })
        return () => unsubscribe()
    }, [contentQuery] )

    return [data, isLoaded]
}