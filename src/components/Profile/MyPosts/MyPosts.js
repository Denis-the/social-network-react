import React from 'react';
import s from  './MyPosts.module.css';
import Post from './Post/Post.js'
import NewPost from './NewPost/NewPost'



class MyPosts extends React.Component {
    render() {
        const jsxPosts = this.props.posts.reverse().map((post) => (
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
                    <NewPost newPostHandler={this.props.newPostHandler}/>

                    <div className={s.posts}>
                        {jsxPosts}
                    </div>
                </div>
            </div>
        )
    }

}






export default MyPosts;