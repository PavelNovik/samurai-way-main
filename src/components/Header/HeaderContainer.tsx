import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthReducerStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerPropsType = MapDispatchType & MapStateType

type MapDispatchType = {
    setAuthUserData: (data: AuthReducerStateType) => void
}
type MapStateType = AuthReducerStateType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then((res) => {
                if (res.data.data) {
                    this.props.setAuthUserData(res.data.data)
                    // console.log(this.props)
                }
            }
        ).catch(e => console.log(e))
    }

    render() {
        return (
            <Header id={this.props.id} email={this.props.email} login={this.props.login} isAuth={this.props.isAuth}/>
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

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer);