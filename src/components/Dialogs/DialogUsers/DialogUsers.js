import DialogUser from "./DialogUser/DialogUser";
import s from './DialogUsers.module.css'



const DialogUsers = (props) => {
    const dialogsJSX = props.dialogs.map((user) => (
        <DialogUser key={user.id} user={user}/>
    ))

    return (
        <div className={s.dialogUsers}>
            {dialogsJSX}
        </div>
    )
}

export default DialogUsers;