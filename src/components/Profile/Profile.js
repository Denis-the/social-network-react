import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js'
import ProfileInfo from './ProfileInfo/ProfileInfo';



class Profile extends React.Component {


  render() {
    const profileData = this.props.profileData;

    return (
      <div>
        <div className={s["big-image"]}>
          <img className={s["big-image__image"]} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
        </div>

        <ProfileInfo />
        <MyPosts profileData={profileData} dispatch={this.props.dispatch} />

      </div>
    )
  }

}

export default Profile;