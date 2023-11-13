import React from "react";
import {StoreType} from "./store";
import store from "./redux-store";

const StoreContext = React.createContext<StoreType>(store);

export default StoreContext;

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
