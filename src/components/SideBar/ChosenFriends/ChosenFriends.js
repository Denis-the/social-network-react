import React from 'react';
import s from './ChosenFriends.module.css'
import ChosenFriendsItem from './ChosenFriendsItem/ChosenFriendsItem';

const ChosenFriends = (props) => {
    const friendsJSX = props.friendsList.map((friend) => (
        <ChosenFriendsItem 
        key={friend.id}
        user={friend}/>
    ))

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friendsContent}>
                
                {friendsJSX}
            </div>
        </div>
    )
}

export default ChosenFriends;