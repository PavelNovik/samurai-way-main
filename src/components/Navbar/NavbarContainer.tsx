// import React, {FC} from 'react';
import {StateType, StoreType} from "../../redux/store";
// import StoreContext from "../../redux/StoreContext";
import Navbar from "./Navbar";
// import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";
import {connect} from "react-redux";


// const NavbarContainer: FC = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store: StoreType) => {
//                 const state = store.getState().sidebar
//                 return <Navbar state={state}/>
//             }}
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state: StateType) => {
    return {
        state: state.sidebar,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)


export default NavbarContainer;