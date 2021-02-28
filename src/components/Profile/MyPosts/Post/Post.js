import React from 'react';
import s from  './Post.module.css';
import UserAvatar from './../../UserAvatar/UserAvatar.js'

class Post extends React.Component {
    render() {
        return (
            <div className={s.post}>
                <div>
                <UserAvatar imageUrl={this.props.user.avatar}/>
                <div className={s.text}>{this.props.text}</div>
                </div>
                <div>Likes: {this.props.likes}</div>
            </div>
        )
    }
}


export default Post;