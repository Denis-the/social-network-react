import React from 'react';
import Post from '../Post/Post';
import s from  './NewPost.module.css';

const NewPost = (props) => {
    const textareaRef = React.createRef()

    const addPost = () => {
        const action = {
            type: 'ADD-NEW-POST'
        };
        props.dispatch(action);
    }

    const newPostOnChange = () => {
        const newValue = textareaRef.current.value;
        const action = {
            type: 'UPDATE-NEW-POST-VALUE',
            newValue: newValue,
        }
        props.dispatch(action);
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea ref={ textareaRef } onChange={ newPostOnChange } value={props.newPostValue}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Опубликовать</button>
            </div>
        </div>
    )
}


export default NewPost;