const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Argon'},
        {id: 2, name: 'Butan'},
        {id: 3, name: 'Neon'},
        {id: 4, name: 'Crypton'},
        {id: 5, name: 'Helium'},
        {id: 6, name: 'Oxygen'}
    ],
    messages: [
        {id: 1, text: 'Hello people.'},
        {id: 2, text: 'Learning Rect??'},
        {id: 3, text: 'Viel Spass!'}
    ],
    newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, text: state.newMessageText}],
                newMessageText: ''  
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    } 
}
export const addMessageCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextCreator = (text) => 
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    
export default messagesReducer;