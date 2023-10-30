import React, { createRef, FC, useRef} from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (title: string) => void
}
const MyPosts: FC<MyPostsPropsType> = ({posts, addPost, updateNewPostText, newPostText}) => {

    const postsList = posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

    // const textareaRef = useRef<HTMLTextAreaElement>(null)
    // const el = textareaRef.current as HTMLTextAreaElement

    const newPostElement = createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
        addPost()
        // updateNewPostText('')
    }

    const onChangeHandler = () => {
        const text = newPostElement.current as HTMLTextAreaElement
        updateNewPostText(text.value)
    }

    return (
        <div>My posts
            <div>
                {/*<textarea ref={textareaRef} placeholder={'your news...'}/>*/}
                <textarea ref={newPostElement} value={newPostText} placeholder={'your news...'} onChange={onChangeHandler}/>
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