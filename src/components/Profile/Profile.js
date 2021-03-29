import Preloader from '../common/Preloader/Preloader'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div>
            { (props.isFetching) ? <Preloader/> : null }

            { (props.profileInfo) ? 
            <ProfileInfo 
            profileInfo={props.profileInfo}
            changeStatus={props.changeStatus}
            status={props.status}
            /> : null}
            
        </div>
    )
}

export default Profile;