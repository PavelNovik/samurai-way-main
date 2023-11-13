import React, {FC} from 'react';
import {StoreType} from "../../redux/store";
import StoreContext from "../../redux/StoreContext";
import Navbar from "./Navbar";


const NavbarContainer: FC = () => {
    return (
        <StoreContext.Consumer>
            {(store: StoreType)=> {
                const state = store.getState().sidebar
                return <Navbar state={state}/>
            }}
        </StoreContext.Consumer>
    );
};

export default NavbarContainer;