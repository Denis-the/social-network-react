import React from 'react';
import MyPosts from './MyPosts'
import { addNewPostActionCreator, updateNewPostValueActionCreator } from './../../../redux/profileReducer';

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const posts = state.profileData.posts;
    const newPostValue = state.profileData.newPostValue;
    const updateNewPostValue = (newValue) =>{
        const action = updateNewPostValueActionCreator(newValue);
        props.store.dispatch(action);
    }
    const addPost = () => {
        const action = addNewPostActionCreator();
        props.store.dispatch(action);
    }

    return (
        <div>
            <MyPosts
            posts={posts}
            newPostValue={newPostValue}
            updateNewPostValue={updateNewPostValue}
            addPost={addPost}
            />
        </div>
    )

}






export default MyPostsContainer;