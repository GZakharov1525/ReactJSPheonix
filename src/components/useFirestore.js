import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        //  Accessing your collection, takes a snapshot of the collection
        //once and then everytime a new image is added (event triggered)
        const unsub = projectFirestore.collection(collection).onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                //take the data fields from each document and also 
                //  include the id that we can use as a key.
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        })

        //  A clean up function that will unsub from the collection
        //to stop listening to it once it is no longer needed.
        return () => unsub();
        
    }, [collection])

    return { docs };
}

export default useFirestore;