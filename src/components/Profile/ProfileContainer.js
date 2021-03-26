import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { Redirect, withRouter } from 'react-router';
import LoginRedirectWrapper from '../../HOCs/RedirectConteiner/RedirectContainer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.loadProfile();
    }

    loadProfile() {
        const profileId = this.props.match.params.userId || this.props.authId;
        this.props.getProfile(profileId);
    }

    render() {
        return (
            <Profile
                isFetching={this.props.isFetching}
                profileInfo={this.props.profileInfo}
                addNewPost={this.props.addNewPost}
                updateNewPostValue={this.props.updateNewPostValue}
            />
        )
    }
}


const mapStateToProps = (state) => ({
    profileInfo: state.profileData.profileInfo,
    isFetching: state.profileData.isFetching,
    authId: state.auth.userId,
})

const mapAuthToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const withURLContainer = withRouter(ProfileContainer);
const withLoginRedirectContainer = connect(mapAuthToProps, {})(LoginRedirectWrapper(withURLContainer));
const ProfileContainerConnected = connect(mapStateToProps, {getProfile})(withLoginRedirectContainer);

export default ProfileContainerConnected

