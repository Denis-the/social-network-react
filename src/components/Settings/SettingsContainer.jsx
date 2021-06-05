import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginRedirectWrapper from "../../hoc/LoginRedirectWrapper/LoginRedirectWrapper";
import {profileHooks, profileSelectors} from "../../state/ducks/profile";
import { authSelectors } from "../../state/ducks/auth";
import Preloader from "../common/Preloader/Preloader";
import Settings from "./Settings";

const { getIsFetching, getProfileInfo } = profileSelectors
const { getAuthId } = authSelectors
const { useClearThenFetchProfileFn } = profileHooks

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
      {profileInfo?.userId === authId ? (
        <Settings profileInfo={profileInfo} />
      ) : (
        !isFetching && <div>Something went wrong, please reload this page</div>
      )}
    </>
  );
});

export default LoginRedirectWrapper(SettingsContainer);
