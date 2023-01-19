// TODO: Install the following package:
import { openDB } from 'idb';

const dbName = 'contacts-db'
const storeName = 'contacts'


// TODO: Complete the initDb() function below:
const initdb = async () => {
    await openDB(dbName, 1, {
        upgrade(db) {
            db.createObjectStore(storeName, { 
                keyPath: 'id', 
                autoIncrement: true 
            })
        }
    })
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    // open db
    const db = await openDB(dbName, 1)
    // create tx
    const tx = db.transaction(storeName, 'readwrite')
    // access store from tx
    const store = tx.objectStore(storeName)
    // mutate store
    await store.add({
        name,
        home_phone: home,
        cell_phone: cell,
        email,
    })
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    // open db
    const db = await openDB(dbName, 1)
    // create tx
    const tx = db.transaction(storeName, 'readwrite')
    // access store from tx
    const store = tx.objectStore(storeName)
    // mutate store
    return await store.getAll()
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    // open db
    const db = await openDB(dbName, 1)
    // create tx
    const tx = db.transaction(storeName, 'readwrite')
    // access store from tx
    const store = tx.objectStore(storeName)
    // mutate store
    await store.delete(id)
};

initdb();
