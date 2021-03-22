import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
    setProfile, addNewPost, updateNewPostValue, toggleIsFetching
} from '../../redux/profileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router';

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        this.loadProfile();
    }

    loadProfile() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setProfile(response.data);
                this.props.toggleIsFetching(false);
            })


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
})

const ProfileContainer = connect(mapStateToProps, {
    addNewPost, updateNewPostValue, setProfile, toggleIsFetching
})(withURLDataContainerComponent)

export default ProfileContainer

