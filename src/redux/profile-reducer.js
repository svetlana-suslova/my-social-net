const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'Hi there!', like: 5},
        {id: 2, text: 'How are you?', like: 12}
    ],
    newPostText: 'Kamasutra'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextCreator = (text) => 
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    
export default profileReducer;