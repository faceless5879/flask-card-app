import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  projectId: "flsk-card",
  appId: "1:464936306877:web:6472c700b8ffc350128fd4",
  storageBucket: "flsk-card.appspot.com",
  locationId: "asia-northeast1",
  apiKey: "AIzaSyAiTbMVb2COD1dBP9s3GZLlH21Fx3F4Lb0",
  authDomain: "flsk-card.firebaseapp.com",
  messagingSenderId: "464936306877",
};
const firebaseApp = firebase.initializeApp(config);
const firebasedb = firebaseApp.firestore();
const storage = firebaseApp.storage();
export { firebasedb, storage };
