import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAuthId } from "../../redux/selectors/authSelectors";
import ChangeProfileStatusForm from "../forms/ChangeProfileStatusForm";


const ProfileStatusWithHooks = React.memo(({ profileId, status }) => {
  const [editMode, setEditMode] = useState(false);
  const authId = useSelector(getAuthId);
  const toggleEditMode = () => {
    if (authId !== profileId) return;
    setEditMode(!editMode);
  };

  return (
    <div>
      {!editMode ? (
        <div className="profile-info__status" onDoubleClick={toggleEditMode}>
          {status}
        </div>
      ) : (
        <ChangeProfileStatusForm status={status} onSave={toggleEditMode} />
      )}
    </div>
  );
});
export default ProfileStatusWithHooks;
