import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  projectId: "flsk-card",
  appId: "1:464936306877:web:6472c700b8ffc350128fd4",
  storageBucket: "flsk-card.appspot.com",
  locationId: "asia-northeast1",
  apiKey: "AIzaSyAiTbMVb2COD1dBP9s3GZLlH21Fx3F4Lb0",
  authDomain: "flsk-card.firebaseapp.com",
  messagingSenderId: "464936306877",
});
