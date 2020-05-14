let renderEntireTree = () => {
}
let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer)  => {
    renderEntireTree = observer;
}

export default state;