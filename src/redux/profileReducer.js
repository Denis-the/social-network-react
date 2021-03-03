const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_NEW_POST:
            const postId = state.profileData.posts[state.profileData.posts.length - 1].id + 1;
            const postText = state.profileData.newPostValue;
            const newPost = {
                id: postId,
                user: { id: 1, name: 'Jack', avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' },
                likes: 0,
                text: postText,
            };
            state.profileData.posts.push(newPost);
            state.profileData.newPostValue = '';   
            break;

        case UPDATE_NEW_POST_VALUE:
            state.profileData.newPostValue = action.newValue;
            break;
    }

    return state 
}

export default profileReducer;