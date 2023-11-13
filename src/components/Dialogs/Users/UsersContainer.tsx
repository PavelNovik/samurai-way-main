import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {UsersType} from "../../../redux/messagesReducer";
import {Dispatch} from "redux";


type MapStatePropsType = {
    users: UsersType[]
}
type MapDispatchPropsType = {

}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.messagesPage.users,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer