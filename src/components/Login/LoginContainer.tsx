import {Login} from "./Login";
import {connect} from "react-redux";
import {loginUserTC, logoutUserTC} from "../../redux/auth-reducer";
import {FormData} from "./LoginForm";
import {AppStateType} from "../../redux/redux-store";

export type LoginProps = MapDispatchProps & MapStateProps
type MapStateProps = {
    isAuth: boolean
}
type MapDispatchProps = {
    loginUserTC: (data: FormData)=> void
    logoutUserTC: ()=> void
}
const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginUserTC, logoutUserTC})(Login)