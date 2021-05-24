import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, useRouteMatch } from "react-router";
import LoginRedirectWrapper from "../../hoc/LoginRedirectWrapper/LoginRedirectWrapper";
import {
  useFetchProfileFn,
  useFetchStatusFn,
} from "../../hooks/profileHooks";
import { getAuthId, getIsFetching } from "../../redux/selectors/authSelectors";
import {
  getProfileInfo,
  getStatus,
} from "../../redux/selectors/profileSelectors";
import Profile from "./Profile";

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
