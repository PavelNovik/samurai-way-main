import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

// const rerenderEntireTree = () => {
ReactDOM.render(
    <BrowserRouter>
        {/*<StoreContext.Provider value={store}>*/}
        <Provider store={store}>
            <App
                // state={state} store={store} dispatch={store.dispatch.bind(store)}
            />
        </Provider>
        {/*</StoreContext.Provider>*/}
    </BrowserRouter>,
    document.getElementById('root')
);
// }
// rerenderEntireTree()
// store.subscribe(rerenderEntireTree)
// store.subscribe(rerenderEntireTree)

