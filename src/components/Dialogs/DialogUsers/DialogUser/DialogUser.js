import s from './DialogUser.module.css'
import {NavLink} from 'react-router-dom';
import UserAvatar from '../../../common/UserAvatar/UserAvatar';



const DialogUser = (props) => {
    const user = props.user;
    const path = `/dialogs/${user.id}`;
    return (
        <NavLink className={s.dialogUser} to={path}>
            <UserAvatar
                imageUrl={user.avatar} />

            <div className={s.dialogUser__name}>
                {user.name}
            </div>
        </NavLink>
    )
}

export default DialogUser;