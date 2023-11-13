import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SidebarType} from "../../redux/sidebarReducer";
import {Dispatch} from "redux";



type MapStatePropsType = {
    state: SidebarType
}
type MapDispatchPropsType = {

}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        state: state.sidebar,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)


export default NavbarContainer;