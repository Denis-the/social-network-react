import React from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./profileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";

const ProfileInfo = React.memo((props) => {
    console.log('render Info')
    if (!props.profileInfo) return null
    return (
        <div>
            <img 
            className={s.avatar}
            src={props.profileInfo.photos.large}/>
            <div>
                {props.profileInfo.fullName}<br/>
                <ProfileStatus 
                changeStatus={props.changeStatus}
                status={props.status} ></ProfileStatus>
                <ProfileStatusWithHooks
                changeStatus={props.changeStatus}
                status={props.status} ></ProfileStatusWithHooks>
            </div>
        </div>
    )
})

export default ProfileInfo