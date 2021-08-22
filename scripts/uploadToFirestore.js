import { firestore } from "../lib/db";
import data from "./data.json";

// const admin = require('./node_modules/firebase-admin');
// const serviceAccount = require("./serviceAccountKey.json");
// const data = require("./data.json");
const collectionKey = "questions"; //name of the collection
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://your-database.firebaseio.com"
// });
// const firestore = admin.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);
console.log(Object.keys(data));
const uploadToFirestore = function () {
  if (data && typeof data === "object") {
    // data.forEach((docKey) => {
    Object.keys(data).forEach((docKey) => {
      firestore
        .collection(collectionKey)
        .doc(docKey)
        .set(data[docKey])
        .then((res) => {
          console.log("Document " + docKey + " successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    });
  }
};

export default uploadToFirestore;
