import React from 'react'


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='content'>
            <div className="content__big-image">
            <img className="big-image__image" src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
            </div>
    
            <div className="avatar+desc"></div>
    
            <div className="my-posts">
              <div className="new-post"></div>
              <div className="posts">
                <div>post1</div>
              </div>
            </div>
            
          </div>
        )
    }

}

export default Profile;