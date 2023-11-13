import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = ProfilePageType

type MapDispatchPropsType = {
    addNewPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostPropsType = MapDispatchPropsType & MapStatePropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewPost: () => dispatch(addPostAC()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;