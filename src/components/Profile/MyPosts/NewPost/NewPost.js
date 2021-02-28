import React from 'react';
import Post from '../Post/Post';
import s from  './NewPost.module.css';

const NewPost = (props) => {
    const textareaRef = React.createRef()

    const addPost = () => {
        props.newPostHandler.handler.addPost();
    }

    const newPostOnChange = () => {
        const text = textareaRef.current.value;
        props.newPostHandler.handler.handleChange(text);
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea ref={ textareaRef } onChange={ newPostOnChange } value={props.newPostHandler.value}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Опубликовать</button>
            </div>
        </div>
    )
}


export default NewPost;