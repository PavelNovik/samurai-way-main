import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthReducerStateType, logoutUserTC, setAuthUserDataTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerPropsType = MapDispatchType & MapStateType

type MapDispatchType = {
    setAuthUserDataTC: () => void
    logoutUserTC: () => void
}
type MapStateType = AuthReducerStateType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setAuthUserDataTC()
    }

    render() {
        return (
            <Header id={this.props.id} email={this.props.email} login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logoutUserTC}/>
        );
    }
}

const MapStateToProps = (state: AppStateType): MapStateType => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(MapStateToProps, {setAuthUserDataTC, logoutUserTC})(HeaderContainer);