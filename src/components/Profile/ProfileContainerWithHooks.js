import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import LoginRedirectWrapper from '../../hoc/LoginRedirectWrapper/LoginRedirectWrapper';
import { getProfile as getProfileAC, getStatus as getStatusAC, changeStatus as changeStatusAC } from '../../redux/profileReducer';
import Profile from './Profile';

const useConnect = () => {
    const dispatch = useDispatch();

    const status = useSelector(state => state.profileData.status);
    const profileInfo = useSelector(state => state.profileData.profileInfo);
    const isFetching = useSelector(state => state.profileData.isFetching);
    const authId = useSelector(state => state.auth.userId);

    const getProfile = (id) => dispatch(getProfileAC(id))
    const getStatus = (id) => dispatch(getStatusAC(id))
    const changeStatus = (status) => dispatch(changeStatusAC(status))

    return { status, profileInfo, isFetching, authId,
        getProfile, getStatus, changeStatus
    }
}

const ProfileContainer = (props) => {
    const { status, profileInfo, isFetching, authId,
        getProfile, getStatus, changeStatus } = useConnect()

    useEffect(() => {
        getProfile(props.match.params.userId || authId);
        getStatus(props.match.params.userId || authId);
    }, [props.match.params.userId, authId]);

    const changeStatusAPI = (status) => {
        changeStatus(status);
    }

    if (!props.match.params.userId) { return <Redirect to={'/profile/' + authId} /> }
    return (
        <Profile
            isFetching={isFetching}
            profileInfo={profileInfo}
            addNewPost={props.addNewPost}
            updateNewPostValue={props.updateNewPostValue}
            changeStatus={changeStatusAPI}
            status={status}
        />
    )
}

export default compose(
    LoginRedirectWrapper,
    withRouter,
)(ProfileContainer)