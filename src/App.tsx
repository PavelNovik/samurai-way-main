import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    addMessage: ()=> void
    updateNewPostText: (title: string) => void
    updateNewMessageText: (title: string) => void
}

function App(props: AppPropsType) {


    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                {/*<Route path={'/profile'} component={Profile}/>*/}
                {/*<Route path={'/profile'} component={() => <Profile posts={props.posts}/>}/>*/}
                <Route path={'/profile'}
                       render={() => <Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText} state={props.state.profilePage}/>}/>
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                <Route path={'/dialogs'} render={() => <Dialogs addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} state={props.state.messagesPage}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>

    );
}

export default App;

