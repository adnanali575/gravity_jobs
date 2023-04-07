import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
export default db; 
export const auth = getAuth();
const storage = getStorage(firebaseApp);
export  {storage}