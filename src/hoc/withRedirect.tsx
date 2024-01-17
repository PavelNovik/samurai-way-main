import React from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

const mapStateWithRedirect = (state: AppStateType): { isAuth:boolean } => ({
    isAuth: state.auth.isAuth
})
export const withRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    const ConnectedRedirectComponent = connect(mapStateWithRedirect)(RedirectComponent)


    return ConnectedRedirectComponent
};

