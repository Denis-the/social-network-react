import React from 'react';
import s from './UserAvatar.module.css'


class UserAvatar extends React.Component {
    render() {
        return (
            <div 
            className={s.avatarContainer}
            >
                <img 
                src={this.props.imageUrl}
                className={s.avatarImg}
                />   
            </div>
        )
    }
}



export default UserAvatar;