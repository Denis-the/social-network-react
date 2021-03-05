import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js'
import Messages from './Messages/Messages.js';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props)=> {
    const dialogsData = props.store.getState().dialogsData;


    const dialogsJSX = dialogsData.dialogs.map((user) => (
        <DialogItem key={user.id} user={user}/>
    ))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogUsers}>
                {dialogsJSX}
            </div>
            
            <MessagesContainer store={props.store}/>
        </div>
    )
}

export default Dialogs;