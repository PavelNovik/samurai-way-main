import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateWithRedirect = { isAuth: boolean }
const mapStateWithRedirect = (state: AppStateType): MapStateWithRedirect => ({
    isAuth: state.auth.isAuth
})
export const withRedirect = <T,>(Component: ComponentType<T>) => {
    class RedirectComponent extends React.Component<MapStateWithRedirect> {
        render() {
            const {isAuth, ...restProps} = this.props
            if (!isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
        }
    }

    const ConnectedRedirectComponent = connect(mapStateWithRedirect)(RedirectComponent)


    return ConnectedRedirectComponent
};

