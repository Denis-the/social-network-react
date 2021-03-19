import { NavLink } from 'react-router-dom';
import UserAvatar from '../../common/UserAvatar/UserAvatar';
import s from './UsersItem.module.css';

const UsersItem = (props) => {

    const onClickAction = () => {
        props.followBTNAction(props.user.id);
    }


    return (
        <div className={s.user}>
            <div>
                <div>
                    <NavLink to={ '/profile/' + props.user.id }>
                        <UserAvatar imageUrl={props.user.photos.small} />
                    </NavLink>
                </div>
                <button 
                type="button"
                onClick={ onClickAction }>
                    { (props.user.isFollowing) ? 'UNFOLLOW' : 'FOLLOW' }
                </button>
            </div>
            <div className={s.userMain}>
                <div>
                    <div>{ props.user.name }</div>
                    <div>{ props.user.status }</div>
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