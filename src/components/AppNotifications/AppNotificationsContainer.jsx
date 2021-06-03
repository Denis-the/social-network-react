import React from 'react';
import { useSelector } from 'react-redux';
import { getNotifications } from '../../redux/selectors/appSelectors';
import NotificationsList from './NotificationsList';


const AppNotificationsContainer = () => {
    const notifications = useSelector(getNotifications);

    return <NotificationsList notifications={notifications}/>
}


export default AppNotificationsContainer;