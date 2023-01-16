import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  const DB_NAME = 'jate';
  const DB_VERSION = 1;
  
  const openDatabaseConnection = async () => {
    return await window.indexedDB.open(DB_NAME, DB_VERSION);
  }
  
  export const storeData = async (content) => {
    const db = await openDatabaseConnection();
    const tx = db.transaction('jate', 'readwrite');
    const jateStore = tx.objectStore('jate');
    const addDataReq = jateStore.put({ id: 1, content });
    const result = await addDataReq;
  }
  
  export const fetchData = async () => {
    const db = await openDatabaseConnection();
    const tx = db.transaction('jate', 'readonly');
    const jateStore = tx.objectStore('jate');
    const fetchDataReq = jateStore.get(1);
    const result = await fetchDataReq;
    console.log(result);
    return result?.content;
  }
  

initdb();
