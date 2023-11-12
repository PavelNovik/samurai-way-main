import React, {createRef, FC, useRef} from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

import {ProfilePageType, StoreActionType } from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsPropsType = {
    state: ProfilePageType
    dispatch: (action: StoreActionType) => void
}
const MyPosts: FC<MyPostsPropsType> = ({state, dispatch}) => {

    const postsList = state.posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

    // const textareaRef = useRef<HTMLTextAreaElement>(null)
    // const el = textareaRef.current as HTMLTextAreaElement

    const newPostElement = createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
        dispatch(addPostAC())
        // updateNewPostText('')
    }

    const onChangeHandler = () => {
        // const text = newPostElement.current as HTMLTextAreaElement
        // updateNewPostText(text.value)
        const text = newPostElement.current?.value
        if (text) dispatch(updateNewPostTextAC(text))
    }

    return (
        <div>My posts
            <div>
                {/*<textarea ref={textareaRef} placeholder={'your news...'}/>*/}
                <textarea ref={newPostElement} value={state.newPostText} placeholder={'your news...'}
                          onChange={onChangeHandler}/>
                {/*<button onClick={()=> console.log(el.value)}>Add Post</button>*/}
                <button onClick={addNewPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postsList}
            </div>
        </div>
    );
};

export default MyPosts;