import React from "react";
import Preloader from "../common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo";

const Profile = React.memo(
  ({ isFetching, profileInfo, status, changeStatus }) => (
    <div>
      {isFetching ? <Preloader /> : null}
      <ProfileInfo
        profileInfo={profileInfo}
        changeStatus={changeStatus}
        status={status}
      />
    </div>
  )
);

export default Profile;
