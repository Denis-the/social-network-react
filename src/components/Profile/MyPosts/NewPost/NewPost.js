import React from 'react';
import { addNewPostActionCreator, updateNewPostValueActionCreator } from '../../../../redux/state';
import Post from '../Post/Post';
import s from  './NewPost.module.css';

const NewPost = (props) => {

    const addPost = () => {
        const action = addNewPostActionCreator();
        props.dispatch(action);
    }

    const updateNewPostValue = (e) => {
        const newValue = e.target.value;
        const action = updateNewPostValueActionCreator(newValue)
        props.dispatch(action);
    }

    return (
        <div className={s.newPost}>
            <div>
                <textarea onChange={ updateNewPostValue } value={props.newPostValue}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Опубликовать</button>
            </div>
        </div>
    )
}


export default NewPost;