import React from "react";
import {StoreType} from "./store";
import store from "./redux-store";

const StoreContext = React.createContext<StoreType>(store);

export default StoreContext;


// export const Provider = (props) => {
//     return <StoreContext.Provider value={props.store}>
//         {props.children}
//     </StoreContext.Provider>
// }
