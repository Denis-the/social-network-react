import React from 'react';
import s from  './MyPosts.module.css';
import Post from './Post/Post.js'
import NewPost from './NewPost/NewPost'

const MyPosts = (props) => {
    const jsxPosts = props.posts.reverse().map((post) => (
        <Post
            key={post.id}
            user={post.user}
            text={post.text}
            likes={post.likes}
        />
    ))

    return (
        <div>
            <h2>My Posts</h2>
            <div className={s.myPosts}>
                <NewPost 
                newPostValue={props.newPostValue}
                updateNewPostValue={props.updateNewPostValue}
                addPost={props.addPost} 
                />

                <div className={s.posts}>
                    {jsxPosts}
                </div>
            </div>
        </div>
    )

}






export default MyPosts;