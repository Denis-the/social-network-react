import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js'
import Messages from './Messages/Messages.js';

class Dialogs extends React.Component {
    render() {
        
        const dialogsData = this.props.dialogsData.dialogs;
        const messagesData = this.props.dialogsData.messages;
        const newMassageHandler = this.props.dialogsData.newMessageHandler;
        
        return (
            <div className={s.dialogs}>
                <div className={s.dialogUsers}>
                    {dialogsData.map((user) => (
                        <DialogItem key={user.id} user={user}/>
                    ))}
                </div>
                
                <Messages messagesData={messagesData} newMessageHandler={newMassageHandler}/>
            </div>
        )
    }

}

export default Dialogs;