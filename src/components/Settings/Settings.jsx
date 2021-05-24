import React from "react";
import { PanelUI } from "../common/UI-components/UIElems";
import ChangeProfileInfoForm from "../forms/ChangeProfileInfoForm"


const Settings = React.memo(({ profileInfo }) => (
    <div className="settings">
      <div className="settings-section">
        <PanelUI
          title="Update profile info"
          body={<ChangeProfileInfoForm profileInfo={profileInfo} />}
        />
      </div>
    </div>
))


export default Settings;
