import types from './types';
import { db, auth } from '../firebase';

export function updateChat(messages) {
    return {
        type: types.UPDATE_CHAT_LOG,
        payload: messages
    };
}

export function sendNewMessage(author, message) {
    return async dispatch => {
        const resp = await db.ref('/chat').push({author, message});

        console.log('Send Message Response:', resp);
    }
}

export function signUp({email, password, username}) {
    return async dispatch => {
        try { 
            const user = await auth.createUserWithEmailAndPassword(email, password);

            user.updateProfile({
                displayName: username
            });

            console.log('USER:', user);
            // dispatch({
            //     type: types.SIGN_UP,
            //     payload: user.displayName
            // });

        } catch(err) {
            console.log('Sign Up Error:', err.message);
        }
    }
}

export function signIn({email, password}) {
    return async dispatch => {
        try {
            auth.signInWithEmailAndPassword(email, password);

            // dispatch({
            //     type: types.SIGN_IN,
            //     payload: user.displayName
            // });
        } catch(err) {
            console.log('Sign In Error:', err.message);
        }
    }
}

export function signOut() {
    return async dispatch => {
        try {
            await auth.signOut();
        } catch(err) {
            console.log('Sign Out Error:', err.message);
        }
    }
}

export function authorize(user) {
    if(user) {
        return {
            type: types.SIGN_IN,
            payload: user.displayName
        };
    }

    return {
        type: types.SIGN_OUT
    }
}