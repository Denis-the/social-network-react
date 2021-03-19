import Preloader from '../common/Preloader/Preloader'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    console.log(props.profileInfo)

    return (
        <div>
            { (props.isFetching) ? <Preloader/> : null }

            { (props.profileInfo) ? 
            <ProfileInfo 
            profileInfo={props.profileInfo}
            /> : null}
            
            

        </div>
    )
}

export default Profile;