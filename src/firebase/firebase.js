import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { prodConfig, devConfig } from './../constants/config'

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export {
  auth,
  provider,
  db,
};