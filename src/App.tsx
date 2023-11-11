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

import {StateType, StoreActionType, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    state: StateType
    dispatch: (action: StoreActionType) => void
}

function App({store}: AppPropsType) {
    const state = store.getState()

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className="app-wrapper-content">
                {/*<Route path={'/profile'} component={Profile}/>*/}
                {/*<Route path={'/profile'} component={() => <Profile posts={props.posts}/>}/>*/}
                <Route path={'/profile'}
                       render={() => <Profile dispatch={store.dispatch.bind(store)}
                                              state={state.profilePage}/>}/>
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                <Route path={'/dialogs'}
                       render={() => <Dialogs dispatch={store.dispatch.bind(store)} state={state.messagesPage}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>

    );
}

export default App;

