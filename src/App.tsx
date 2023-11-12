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

import {StateType, StoreActionType, StoreType} from "./redux/store";

type AppPropsType = {
    store: StoreType
    state: StateType
    dispatch: (action: StoreActionType) => void
}

function App({store, state}: AppPropsType) {

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className="app-wrapper-content">
                {/*<Route path={'/profile'} component={Profile}/>*/}
                {/*<Route path={'/profile'} component={() => <Profile posts={props.posts}/>}/>*/}
                <Route path={'/profile'}
                       render={() => <Profile store={store}/>}/>
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                <Route path={'/dialogs'}
                       render={() => <Dialogs store={store}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>

    );
}

export default App;

