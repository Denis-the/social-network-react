import React from 'react';
import { connect } from 'react-redux';
import { loadProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.loadProfile();
    }

    loadProfile() {
        this.props.loadProfile(this.props.match.params.userId);
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

const withURLDataContainerComponent = withRouter(ProfileAPIContainer)

const mapStateToProps = (state) => ({
    profileInfo: state.profileData.profileInfo,
    isFetching: state.profileData.isFetching,
    authId: state.auth.userId
})

const ProfileContainer = connect(mapStateToProps, {loadProfile})(withURLDataContainerComponent);

export default ProfileContainer

