import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, useRouteMatch } from "react-router";
import { profileSelectors, profileHooks } from "../../state/ducks/profile";
import { authSelectors } from "../../state/ducks/auth";
import LoginRedirectWrapper from "../../hoc/LoginRedirectWrapper/LoginRedirectWrapper";
import Profile from "./Profile";

const { getAuthId, getIsFetching } = authSelectors;
const { getProfileInfo, getStatus } = profileSelectors;
const { useFetchProfileFn, useFetchStatusFn } = profileHooks;

const ProfileContainer = () => {
  const match = useRouteMatch();

  const status = useSelector(getStatus);
  const profileInfo = useSelector(getProfileInfo);
  const isFetching = useSelector(getIsFetching);
  const authId = useSelector(getAuthId);

  const fetchProfile = useFetchProfileFn();
  const fetchStatus = useFetchStatusFn();

  useEffect(() => {
    fetchProfile(match.params.userId || authId);
    fetchStatus(match.params.userId || authId);
  }, [match.params.userId, authId]);
  if (!match.params.userId) {
    return <Redirect to={`/profile/${authId}`} />;
  }

  return (
    <Profile
      isFetching={isFetching}
      profileInfo={profileInfo}
      status={status}
    />
  );
};

export default LoginRedirectWrapper(ProfileContainer);
