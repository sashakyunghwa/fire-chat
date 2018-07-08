import firebase from 'firebase';
import config from '../config';

firebase.initializeApp(config.firebase);

export const db = firebase.database();
export const auth = firebase.auth();

