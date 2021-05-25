import React from "react";
import PropTypes from "prop-types";
import { PanelUI } from "../common/UI-components/UIElems";
import ChangeProfileInfoForm from "../forms/ChangeProfileInfoForm"
import ChangeProfilePhoto from "../forms/ChangeProfilePhoto";


const Settings = React.memo(({ profileInfo }) => (
    <div className="settings">
      <div className="settings-section">
        <PanelUI
          title="Update profile info"
          body={<ChangeProfileInfoForm profileInfo={profileInfo} />}
        />
        <PanelUI
          title="Update profile photo"
          body={<ChangeProfilePhoto profileInfo={profileInfo} />}
        />
      </div>
    </div>
))

Settings.displayName = 'Settings';
Settings.propTypes = {
  profileInfo: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    aboutMe: PropTypes.string,
    lookingForAJob: PropTypes.bool.isRequired,
    lookingForAJobDescription: PropTypes.string.isRequired,
    photos: PropTypes.shape({
      small: PropTypes.string,
      large: PropTypes.string,
    }).isRequired,
    contacts: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
}

export default Settings;
