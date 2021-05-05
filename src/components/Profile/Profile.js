import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import ProfileInfo from './ProfileInfo'

const Profile = React.memo((props) => {
    return (
        <div>
            { (props.isFetching) ? <Preloader/> : null }
            <ProfileInfo 
            profileInfo={props.profileInfo}
            changeStatus={props.changeStatus}
            status={props.status}
            />            
        </div>
    )
})

export default Profile;