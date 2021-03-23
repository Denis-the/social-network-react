import axios from 'axios';
import { NavLink } from 'react-router-dom';
import UserAvatar from '../../common/UserAvatar/UserAvatar';
import s from './UsersItem.module.css';

const UsersItem = (props) => {
    const user = props.user;

    const btnFollow = () => {
        props.follow(user.id)
    }

    const btnUnfollow = () => {
        props.unfollow(user.id)
    }



    return (
        <div className={s.user}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <UserAvatar imageUrl={user.photos.small} />
                    </NavLink>
                </div>

                {(props.user.followed)
                    ? <button onClick={ btnUnfollow }>UnFollow</button>
                    : <button onClick={ btnFollow }>Follow</button>
                }

            </div>
            <div className={s.userMain}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>
                        {/* {props.user.location.country},<br/>
                        {props.user.location.city} */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UsersItem;