import types from './types';

export function updateChat(messages) {
    return {
        type: types.UPDATE_CHAT_LOG,
        payload: messages
    };
}
