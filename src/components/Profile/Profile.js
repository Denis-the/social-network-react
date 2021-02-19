import React from 'react';
import s from  './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js'

const testUser = {
  avatar: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
  userName: 'Denis'

}


class Profile extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
          user: testUser
        }
    }
    
    render() {
        return (
          <div>
            <div className={s["big-image"]}>
              <img className={s["big-image__image"]} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
            </div>

            <div className={s["avatar+desc"]}></div>

            <MyPosts user={this.state.user}/>
            
          </div>
        )
    }

}

export default Profile;