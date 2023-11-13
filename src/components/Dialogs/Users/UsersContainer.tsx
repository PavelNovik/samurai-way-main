import React, {FC} from 'react';

import {StoreType, UsersType} from "../../../redux/store";
import Users from "./Users";
import StoreContext from "../../../redux/StoreContext";

type UserPropsType = {
    // store: StoreType
}
const UsersContainer: FC<UserPropsType> = () => {

    return (
        <StoreContext.Consumer>
            {(store: StoreType)=> {
                const users: UsersType[] = store.getState().messagesPage.users
                return <Users users={users}/>
            }}
        </StoreContext.Consumer>
    )
}

export default UsersContainer