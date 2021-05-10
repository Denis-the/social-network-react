import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLoginRedirect } from "../../hoc/LoginRedirectWrapper/LoginRedirectWrapper"
import { clearProfile, getProfile } from "../../redux/profileReducer"
import { getAuthId } from "../../redux/selectors/authSelectors"
import { getIsFetching, getProfileInfo } from "../../redux/selectors/profileSelectors"
import Preloader from "../common/Preloader/Preloader"
import Settings from "./Settings"


const SettingsContainer =  React.memo(() => {
    useLoginRedirect()
    const dispatch = useDispatch();
    const authId = useSelector(getAuthId);
    const profileInfo = useSelector(getProfileInfo);
    const profileId = profileInfo?.userId;
    const isFetching = useSelector(getIsFetching);
    
    useEffect(() => {
        if (!authId || authId === profileId) return;
        dispatch(clearProfile());
        dispatch(getProfile(authId));
    }, [authId, profileId])

    return (
        <>
            {isFetching ? <Preloader/> :  null}
            <Settings profileInfo={profileInfo}/>
        </>
    )
})

export default SettingsContainer