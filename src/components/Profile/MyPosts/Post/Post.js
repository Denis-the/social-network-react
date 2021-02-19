import React from 'react';
import s from  './Post.module.css';
import UserAvatar from './../../UserAvatar/UserAvatar.js'

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            user: props.user,
            likes: props.likesCount,
        }
    }

    render() {
        return (
            <div className={s.post}>
                <div>
                <UserAvatar imageUrl={this.state.user.avatar}/>
                <div className={s.text}>{this.state.text}</div>
                </div>
                <div>Likes: {this.state.likes}</div>
            </div>
        )
    }
}


export default Post;