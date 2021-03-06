// this is an example of local handmade store similar to redux-store 
import profileReducer from '../redux/profile-reducer';
import messagesReducer from '../redux/messages-reducer';
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
export default store;