import React from 'react';
import s from  './MyPosts.module.css';
import Post from './Post/Post.js'

const postsList = [
    'Hey, why nobody love me?',
    "It's our new program! Hey",
]


class MyPosts extends React.Component {
    constructor(props){
        super(props);

        
        this.state = {
            user: props.user,
        }
    }


    render() {

        const testPosts = postsList.map((text) => (
            <Post 
            key={text}
            user={this.state.user} 
            text={text}
            likesCount={Math.floor(Math.random() * Math.floor(10))}
            />
            ))
        
        return (
            <div className={s.myPosts}>
                <div className={s.newPost}></div>

                <div className={s.posts}>
                    {testPosts}
                </div>
            </div>

        )
    }

}






export default MyPosts;