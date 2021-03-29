import s from "./ProfileInfo.module.css"
import ProfileStatus from "./profileStatus/ProfileStatus";


const ProfileInfo = (props) => {

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
            </div>
        </div>
    )
}

export default ProfileInfo