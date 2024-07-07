import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const clientCredentials = {
  apiKey: 'AIzaSyD39xFdjAtG3V98VseZZUg4PGZOs0denzA',
  authDomain: 'esquisse-lab.firebaseapp.com',
  projectId: 'esquisse-lab',
  storageBucket: 'esquisse-lab.appspot.com',
  messagingSenderId: '812269198156',
  appId: '1:812269198156:web:85257bedefee2029f78de9',
  measurementId: 'G-7EQMV95N7G',
};

const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(clientCredentials);
initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
export const db = getFirestore(firebaseApp);
export const functions = getFunctions(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

export default firebaseApp;
