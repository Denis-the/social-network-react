import s from "./ProfileInfo.module.css"
import UserAvatar from "../../common/UserAvatar/UserAvatar";


const ProfileInfo = (props) => {

    return (
        <div>
            <img 
            className={s.avatar}
            src={props.profileInfo.photos.large}/>
            <div>
                {props.profileInfo.fullName}
                
            </div>
        </div>
    )
}

export default ProfileInfo