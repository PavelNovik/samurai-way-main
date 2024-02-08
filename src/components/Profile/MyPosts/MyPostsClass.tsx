import React from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {PostDataT, PostReduxForm} from "./Post/PostForm";

class MyPostsClass extends React.PureComponent<MyPostPropsType> {


    // shouldComponentUpdate(nextProps: Readonly<MyPostPropsType>, nextState: Readonly<{}>): boolean {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {
        let {posts, addNewPost} = this.props;

        const postsList = posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

        // const newPostElement = createRef<HTMLTextAreaElement>()
        const addNewPostHandler = (data: PostDataT) => {
            console.log(data)
            addNewPost(data.post)
        }


        return (
            <div>My posts
                <PostReduxForm onSubmit={addNewPostHandler}/>
                <div className={styles.posts}>
                    {postsList}
                </div>
            </div>
        );
    }
}

export default MyPostsClass;