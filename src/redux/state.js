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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubcriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);
        }
    } 
}
export default store;