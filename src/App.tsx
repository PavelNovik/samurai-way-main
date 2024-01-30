import React, {Component, ComponentType} from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Redirect, Route, RouteComponentProps} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import {UsersPageContainer} from "./components/Users/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type AppProps = MapDispatchProps & MapStateProps

type MapDispatchProps = {
    initializeAppTC: () => void
}
type MapStateProps = {
initialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStateProps => ({
    initialized: state.app.initialized
})

class App extends Component<CommonComponentType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if(!this.props.initialized) return <Preloader/>

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
}

type CommonComponentType = RouteComponentProps & AppProps
// export default withRouter(connect(null, {setAuthUserDataTC})(App));
export default compose<ComponentType>(connect(mapStateToProps, {initializeAppTC}), withRouter)(App);

