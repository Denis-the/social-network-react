import React from 'react';

import Post from '../Post/Post';
import s from  './NewPost.module.css';

const NewPost = (props) => {
    const onAddPost = () => {
        props.addNewPost()
    }

    const onUpdateNewPostValue = (e) => {
        const newValue = e.target.value;
        props.updateNewPostValue(newValue);
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea onChange={ onUpdateNewPostValue } value={props.newPostValue}></textarea>
            </div>
            <div>
                <button onClick={ onAddPost }>Опубликовать</button>
            </div>
        </div>
    )
}


export default NewPost;