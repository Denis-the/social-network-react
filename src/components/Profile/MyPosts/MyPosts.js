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
    }


    render() {
        const testPosts = postsList.map((text) => (
            <Post text={text}/>
            ))
        console.log(testPosts)
        return (
            <div className={s.myPosts}>
                <div className={s.newPost}>


                </div>

                <div className={s.posts}>
                    {testPosts}
                    
                </div>
            </div>

        )
    }

}






export default MyPosts;