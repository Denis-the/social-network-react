import React from "react";
import { PanelUI } from "../common/UI-components/UIElems";
import ProfileInfoUpdateForm from "./sections/ProfileInfoUpdateForm";

const Settings = React.memo(({profileInfo})=> {

    return (
        <div className="settings">   
            <div className="settings-section">
                <PanelUI title='Update profile info' body={<ProfileInfoUpdateForm profileInfo={profileInfo}/>} />
                                   
                
            </div>
        </div>
        
    )
}) 

export default Settings;