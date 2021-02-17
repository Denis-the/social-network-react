import React from 'react';
import s from  './SideBar.module.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav className={s["side-bar"]}>
                <div className={s['item']}>Profile</div>
                <div className={s['item']}>Messages</div>
                <div className={s['item']}>News</div>
                <div className={s['item']}>Music</div>
                <div className={s['item']}>Settings</div>
            </nav>
        )
    }

}

export default SideBar;