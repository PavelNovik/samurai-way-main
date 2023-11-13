// import React, {FC} from 'react';

import {StateType, StoreType, UsersType} from "../../../redux/store";
import Users from "./Users";
// import StoreContext from "../../../redux/StoreContext";
import {connect} from "react-redux";
// import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

// type UserPropsType = {
//      store: StoreType
// }
// const UsersContainer: FC<UserPropsType> = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store: StoreType) => {
//                 const users: UsersType[] = store.getState().messagesPage.users
//                 return <Users users={users}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: StateType) => {
    return {
        users: state.messagesPage.users,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer