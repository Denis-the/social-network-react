import React from 'react';
import s from  './Post.module.css';
import UserAvatar from './../../UserAvatar/UserAvatar.js'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div>
                <UserAvatar imageUrl={props.user.avatar} />
                <div className={s.text}>{props.text}</div>
            </div>
            <div>Likes: {props.likes}</div>
        </div>
    )
}



export default Post;