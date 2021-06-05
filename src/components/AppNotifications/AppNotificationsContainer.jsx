import React from 'react';
import { useSelector } from 'react-redux';
import { appSelectors } from '../../state/ducks/app';
import NotificationsList from './NotificationsList';

const {getNotifications} = appSelectors;

const AppNotificationsContainer = () => {
    const notifications = useSelector(getNotifications);

    return <NotificationsList notifications={notifications}/>
}


export default AppNotificationsContainer;