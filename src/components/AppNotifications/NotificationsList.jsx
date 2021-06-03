import React from "react";
import Notification from "./Notification";


const NotificationsList = ({ notifications }) =>  (
    <div className='notifications__container'>
      {notifications.map(({id, type, message}) => (
        <Notification 
        key={id}
        id={id}
        type={type}
        message={message}
        />
      ))}
    </div>
);

export default NotificationsList;
