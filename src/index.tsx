import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StateType} from "./redux/store";
import store from "./redux/redux-store";
import StoreContext from "./redux/StoreContext";

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App
                    // state={state} store={store} dispatch={store.dispatch.bind(store)}
                />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
// store.subscribe(rerenderEntireTree)
store.subscribe(() => rerenderEntireTree(store.getState()))

