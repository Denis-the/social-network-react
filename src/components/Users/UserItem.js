import { NavLink } from 'react-router-dom';
import { ButtonUI } from '../common/UI-components/UIElems';
import UserAvatar from '../common/UserAvatar/UserAvatar';

const UserItem = ({ user, followingInProgress, follow, unfollow, }) => {
    const followUnfollowButton = user.followed ?
        <ButtonUI disabled={followingInProgress.has(user.id)} className="p-button-sm" onClick={() => unfollow(user.id)}>Unfollow</ButtonUI>
        : <ButtonUI disabled={followingInProgress.has(user.id)} className="p-button-sm" onClick={() => follow(user.id)}>Follow</ButtonUI>

    return (
        <div className='users-item__item'>
            <NavLink to={'/profile/' + user.id}>
            <div className='p-d-flex users-item__user-info'>
                <div className='users-item__avatar'><UserAvatar imageUrl={user.photos.small}/></div>
                <div>
                    <span className='users-item__name'>{user.name}</span>
                    <div className='users-item__status'>{user.status}</div>
                </div>
            </div>
            </NavLink>
            {followUnfollowButton}
        </div>
    )

}

export default UserItem;