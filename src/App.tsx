import React from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import {UsersPageContainer} from "./components/Users/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


function App() {

    return (

        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                {/*<Route path={'/profile'} component={Profile}/>*/}
                {/*<Route path={'/profile'} component={() => <Profile posts={props.posts}/>}/>*/}
                {/*<Route path={'/profile'}*/}
                {/*       render={() => <Profile/>}/>*/}
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer/>}/>
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                <Route path={'/dialogs'}
                       render={() => <Dialogs/>}/>
                <Route path={'/users'} render={() => <UsersPageContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/login'} component={LoginContainer}/>
            </div>
        </div>

    );
}

export default App;

