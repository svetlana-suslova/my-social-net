import profileReducer, {addPost} from './profile-reducer';

//1. test data
const action = addPost('blabla');
let state = {
    posts: [
        {id: 1, text: 'Hi there!', like: 5},
        {id: 2, text: 'How are you?', like: 12}
    ]
};
it('length of posts should be incremented', () => {
    //2. action
    const newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});
it('text of new post should be correct', () => {
    //2. action
    const newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[2].text).toBe('blabla');
});