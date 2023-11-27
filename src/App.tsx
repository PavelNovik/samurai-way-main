import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import {UsersPageContainer} from "./components/Users/UsersPageContainer";


function App() {

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                {/*<Route path={'/profile'} component={Profile}/>*/}
                {/*<Route path={'/profile'} component={() => <Profile posts={props.posts}/>}/>*/}
                <Route path={'/profile'}
                       render={() => <Profile/>}/>
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                <Route path={'/dialogs'}
                       render={() => <Dialogs/>}/>
                <Route path={'/users'} render={()=> <UsersPageContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>

    );
}

export default App;

