import React, { useState } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../state/ducks/auth";
import ChangeProfileStatusForm from "../forms/ChangeProfileStatusForm";

const { getAuthId } = authSelectors;

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
