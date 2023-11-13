// import React, {FC} from 'react';
// import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../redux/StoreContext";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store";


// const MyPostsContainer = (props) => {
//     // const state = props.store.getState().profilePage
//     // const addNewPost = () => {
//     //     props.store.dispatch(addPostAC())
//     // }
//     //
//     // const onChangeHandler = (text: string) => {
//     //     props.store.dispatch(updateNewPostTextAC(text))
//     // }
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 const state = store.getState().profilePage
//                 const addNewPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//
//                 const onChangeHandler = (text: string) => {
//                     store.dispatch(updateNewPostTextAC(text))
//                 }
//
//                 return <MyPosts posts={state.posts} newPostText={state.newPostText} addNewPost={addNewPost}
//                                 updateNewPostText={onChangeHandler}/>
//             }
//         }
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewPost: () => dispatch(addPostAC()),
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;