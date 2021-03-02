import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js'
import Messages from './Messages/Messages.js';

class Dialogs extends React.Component {
    
    render() {
        const dialogs = this.props.dialogsData.dialogs;
        
        return (
            <div className={s.dialogs}>
                <div className={s.dialogUsers}>
                    {dialogs.map((user) => (
                        <DialogItem key={user.id} user={user}/>
                    ))}
                </div>
                
                <Messages dialogsData={this.props.dialogsData} dispatch={this.props.dispatch}/>
            </div>
        )
    }

}

export default Dialogs;