import React, {createRef, FC} from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addNewPost: () => void
    updateNewPostText: (text: string) => void
}
const MyPosts: FC<MyPostsPropsType> = ({posts, newPostText, addNewPost, updateNewPostText}) => {

    const postsList = posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

    // const textareaRef = useRef<HTMLTextAreaElement>(null)
    // const el = textareaRef.current as HTMLTextAreaElement

    const newPostElement = createRef<HTMLTextAreaElement>()
    const addNewPostHandler = () => {
        // dispatch(addPostAC())
        addNewPost()
        // updateNewPostText('')
    }

    const onPostChangeHandler = () => {
        // const text = newPostElement.current as HTMLTextAreaElement
        // updateNewPostText(text.value)
        // const text = newPostElement.current?.value
        // if (text) dispatch(updateNewPostTextAC(text))
        const text = newPostElement.current?.value
        updateNewPostText(text ? text : '')
    }

    return (
        <div>My posts
            <div>
                {/*<textarea ref={textareaRef} placeholder={'your news...'}/>*/}
                <textarea ref={newPostElement} value={newPostText} placeholder={'your post...'}
                          onChange={onPostChangeHandler}/>
                {/*<button onClick={()=> console.log(el.value)}>Add Post</button>*/}
                <button onClick={addNewPostHandler}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postsList}
            </div>
        </div>
    );
};

export default MyPosts;