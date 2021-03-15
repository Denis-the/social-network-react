import React from 'react';
import MyPosts from './MyPosts'
import { addNewPost, updateNewPostValue } from './../../../redux/profileReducer';
import { connect } from 'react-redux';


// classic way to create a container component 

// const MyPostsContainer = (props) => {
//     const state = props.store.getState();

//     const posts = state.profileData.posts;
//     const newPostValue = state.profileData.newPostValue;
//     const updateNewPostValue = (newValue) =>{
//         const action = updateNewPostValueActionCreator(newValue);
//         props.store.dispatch(action);
//     }
//     const addPost = () => {
//         const action = addNewPostActionCreator();
//         props.store.dispatch(action);
//     }

//     return (
//         <div>
//             <MyPosts
//             posts={posts}
//             newPostValue={newPostValue}
//             updateNewPostValue={updateNewPostValue}
//             addPost={addPost}
//             />
//         </div>
//     )

// }

const mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts,
        newPostValue: state.profileData.newPostValue,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addNewPost, updateNewPostValue })(MyPosts);


export default MyPostsContainer;