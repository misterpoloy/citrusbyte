import { db } from './firebase';

// get users
export const query = (collection, callback) => {
    db.collection(collection).get().then((response) => {
        const data = []
        response.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            const content = doc.data()
            data.push({ id: doc.id, ...content });
        });
        callback(data)
      }).catch(function(error) {
        callback({ error })
      });
}