import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resovle, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imgUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL); ',
        [],
        () => {
          resovle();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imgURI, address, lat, lng) => {
  const promise = new Promise((resovle, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO places (title, imgUri, address, lat, lng) VALUES (?,?,?,?,?)',
        [title, imgURI, address, lat, lng],
        (_, result) => {
          resovle(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resovle, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          resovle(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
