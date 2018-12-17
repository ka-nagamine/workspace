import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App.js';
import createStore from './createStore';
// import registerServiceWorker from './serviceWorker';
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker.register();