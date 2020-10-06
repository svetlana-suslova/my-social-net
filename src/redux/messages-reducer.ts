const ADD_MESSAGE = 'messages/ADD-MESSAGE';

type dialogType = {
    id: number
    name: string
}
type messageType = {
    id: number
    text: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Argon'},
        {id: 2, name: 'Butan'},
        {id: 3, name: 'Neon'},
        {id: 4, name: 'Crypton'},
        {id: 5, name: 'Helium'},
        {id: 6, name: 'Oxygen'}
    ] as Array<dialogType>,
    messages: [
        {id: 1, text: 'Hello people.'},
        {id: 2, text: 'Learning Rect??'},
        {id: 3, text: 'Viel Spass!'}
    ] as Array<messageType>
};

type initialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: any): initialStateType => {
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
type addMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}
export const addMessage = (newMessageText: string): addMessageActionType => ({type: ADD_MESSAGE, newMessageText});
    
export default messagesReducer;