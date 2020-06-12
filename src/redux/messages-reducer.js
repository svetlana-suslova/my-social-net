const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, text: action.newMessageText}]
            };
        default:
            return state;
    } 
}
export const addMessage = (newMessageText) => ({type: 'ADD-MESSAGE', newMessageText});
    
export default messagesReducer;