import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hi there!', like: 5},
                {id: 2, text: 'How are you?', like: 12}
            ],
            newPostText: 'Kamasutra'
        },
        messagesPage: {
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
        }   
    },
    _callSubcriber() {
    },
    getState() {
        return this._state

    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        
        this._callSubcriber(this._state);
    } 
}
export const addPostCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextCreator = (text) => 
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
export const addMessageCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextCreator = (text) => 
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
export default store;