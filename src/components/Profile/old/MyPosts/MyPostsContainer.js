import MyPosts from './MyPosts'
import { addNewPost, updateNewPostValue } from './../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts,
        newPostValue: state.profileData.newPostValue,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addNewPost, updateNewPostValue })(MyPosts);


export default MyPostsContainer;