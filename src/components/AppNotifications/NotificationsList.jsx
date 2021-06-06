import React from "react";
import Notification from "./Notification";


const NotificationsList = ({ notifications, removeNotification }) =>  (
    <div className='notifications__container'>
      {notifications.map(({id, type, message, isHTMLContent}) => (
        <Notification 
        key={id}
        id={id}
        type={type}
        message={message}
        isHTMLContent={isHTMLContent}
        removeNotification={removeNotification}
        />
      ))}
    </div>
);

export default NotificationsList;
