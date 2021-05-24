import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginRedirectWrapper from "../../hoc/LoginRedirectWrapper/LoginRedirectWrapper";
import { useClearThenFetchProfileFn } from "../../hooks/profileHooks";
import { getAuthId } from "../../redux/selectors/authSelectors";
import {
  getIsFetching,
  getProfileInfo,
} from "../../redux/selectors/profileSelectors";
import Preloader from "../common/Preloader/Preloader";
import Settings from "./Settings";

const SettingsContainer = React.memo(() => {
  const reloadProfile = useClearThenFetchProfileFn();
  const authId = useSelector(getAuthId);
  const profileInfo = useSelector(getProfileInfo);
  const profileId = profileInfo?.userId;
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    if (!authId || authId === profileId) return;
    reloadProfile(authId);
  }, [authId, profileId]);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Settings profileInfo={profileInfo} />
    </>
  );
});

export default LoginRedirectWrapper(SettingsContainer);
