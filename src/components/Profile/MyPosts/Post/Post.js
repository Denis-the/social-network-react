import React from 'react';
import s from  './Post.module.css';


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
        }
    }

    render() {
        return (
            <div className={s.post}>
                <div className={s.avatar}></div>
                <div className={s.text}>{this.state.text}</div>
            </div>
        )
    }

}






export default Post;