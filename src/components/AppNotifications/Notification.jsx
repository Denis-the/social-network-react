import React from "react";
import parseHTML from "html-react-parser";
import cn from "classnames";

const Notification = ({
  id,
  type,
  message,
  isHTMLContent = false,
  removeNotification,
}) => {
  let messageHTMLcontent;
  const notificationCN = cn({
    notification: true,
    [type]: true ,
  });
  if (isHTMLContent) messageHTMLcontent = parseHTML(message);

  return (
    <div className={notificationCN}>
      <div className="notification__message">
        {isHTMLContent ? messageHTMLcontent : message}
      </div>
      <button
        className="notification__close-btn"
        type="button"
        onClick={() => removeNotification(id)}
      >
        Close
      </button>
    </div>
  );
};

export default Notification;
