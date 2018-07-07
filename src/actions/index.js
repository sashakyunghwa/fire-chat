import types from './types';
import db from '../firebase';

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