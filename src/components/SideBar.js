import React from 'react'


class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav className='side-bar'>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
        )
    }

}

export default SideBar;