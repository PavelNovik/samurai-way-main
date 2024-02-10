import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {BrowserRouter} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

// const rerenderEntireTree = () => {
ReactDOM.render(
    <HashRouter
        // basename={process.env.PUBLIC_URL}
    >
        {/*<StoreContext.Provider value={store}>*/}
        <Provider store={store}>
            <App
                // state={state} store={store} dispatch={store.dispatch.bind(store)}
            />
        </Provider>
        {/*</StoreContext.Provider>*/}
    </HashRouter>,
    document.getElementById('root')
);
// }
// rerenderEntireTree()
// store.subscribe(rerenderEntireTree)
// store.subscribe(rerenderEntireTree)

