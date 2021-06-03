import React from "react";
import cn from "classnames";

const Notification = ({ id, type, message }) => {
  const notificationCN = cn({
    'notification': true,
    [type]: true,
  });

  return (
    <div className={notificationCN}>
      <div className='notification__message'>{message}</div>
      <button className='notification__close-btn' type='button' onClick={() => id}>Close</button>
    </div>
  );
};


export default Notification;
