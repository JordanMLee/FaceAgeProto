import {SQLite} from "expo-sqlite";

// const database_name = 'selfies.db';
// export default class Database {
//     initDB() {
//         let db;
//         return new Promise( (resolve,reject ) => {
//             console.log("initializing database")
//         })
//             .then( () => {
//                 db.transaction((tx) => {
//                     tx.executeSql('CREATE TABLE IF NOT EXISTS selfies (id INTEGER PRIMARY KEY NOT NULL, imageUri TEXT NOT NULL);',
//                         [],
//                         () => {
//                             resolve();
//                         },
//                         (_, err) => {
//                             reject(err);
//                         })
//                 });
//             })
//     }
// }

// const db = SQLite.openDatabase('selfies.db');
// export const init = () => {
//     const promise = new Promise((resolve, reject) => {
//         db.transaction((tx) => {
//             tx.executeSql('CREATE TABLE IF NOT EXISTS selfies (id INTEGER PRIMARY KEY NOT NULL, imageUri TEXT NOT NULL);',
//                 [],
//                 () => {
//                     resolve();
//                 },
//                 (_, err) => {
//                     reject(err);
//                 })
//         });
//     });
// };
