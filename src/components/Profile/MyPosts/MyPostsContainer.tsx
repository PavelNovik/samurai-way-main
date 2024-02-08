import {addPostAC, ProfilePageType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
// import MyPostsClass from "./MyPostsClass";


type MapStatePropsType = ProfilePageType

type MapDispatchPropsType = {
    addNewPost: (post: string) => void
}

export type MyPostPropsType = MapDispatchPropsType & MapStatePropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        profile: null,
        status: state.profilePage.status
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewPost: (post: string) => dispatch(addPostAC(post)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;