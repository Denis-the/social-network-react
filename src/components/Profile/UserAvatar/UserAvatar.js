import React from 'react';
import s from './UserAvatar.module.css'


class UserAvatar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl: props.imageUrl
            
        }
    }

    render() {
        return (
            <div 
            className={s.avatarContainer}
            >
                <img 
                src={this.state.imageUrl}
                className={s.avatarImg}
                />
            </div>
        )
    }

}



export default UserAvatar;