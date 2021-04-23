import { NavLink } from 'react-router-dom';
import { ButtonUI } from '../common/UI-components/UIElems';
import UserAvatar from '../common/UserAvatar/UserAvatar';
import s from './Users.module.css';

const UserItem = ({ user, followingInProgress, follow, unfollow, }) => {
    const followUnfollowButton = user.followed ?
        <ButtonUI disabled={followingInProgress.has(user.id)} className="p-button-sm" onClick={() => unfollow(user.id)}>Unfollow</ButtonUI>
        : <ButtonUI disabled={followingInProgress.has(user.id)} className="p-button-sm" onClick={() => follow(user.id)}>Follow</ButtonUI>


    return (
        <div className='users__item'>
            <div className='p-d-flex'>
                <NavLink to={'/profile/' + user.id}><UserAvatar imageUrl={user.photos.small} /></NavLink>
                <div>
                    <span className='UserItem__user-name'>{user.name}</span>
                    <div className='UserItem__user-status'>{user.status}</div>
                </div>
            </div>
            {followUnfollowButton}
        </div>
    )

}

export default UserItem;