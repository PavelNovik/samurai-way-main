import React, {FC} from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}
const MyPostsContainer: FC<MyPostsContainerPropsType> = (props) => {
    const state = props.store.getState().profilePage
    const addNewPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onChangeHandler = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (<MyPosts posts={state.posts} newPostText={state.newPostText} addNewPost={addNewPost} updateNewPostText={onChangeHandler}/>
    );
};

export default MyPostsContainer;