import React from 'react';
import { connect } from 'react-redux';
import { getProfile, changeStatus, getStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Profile from './Profile';
import LoginRedirectWrapper from '../../hoc/LoginRedirectWrapper/LoginRedirectWrapper';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.loadProfile();
        
    }

    loadProfile() {
        const profileId = this.props.match.params.userId || this.props.authId;
        this.props.getStatus(profileId);
        this.props.getProfile(profileId);
    }

    changeStatus = (newStatus) => {
        this.props.changeStatus(newStatus);
    }

    render() {
        return (
            <Profile
                isFetching={this.props.isFetching}
                profileInfo={this.props.profileInfo}
                addNewPost={this.props.addNewPost}
                updateNewPostValue={this.props.updateNewPostValue}
                changeStatus={this.changeStatus}
                status={this.props.status}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profileData.profileInfo,
    status:state.profileData.status,
    isFetching: state.profileData.isFetching,
    authId: state.auth.userId,
})

export default compose(
    connect(mapStateToProps, {getProfile, changeStatus, getStatus}),
    LoginRedirectWrapper,
    withRouter,
)(ProfileContainer)