import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { todoReducer } from "./reducers/Todo";
import { calReducer } from "./reducers/Cal";
import { mailRegReducer } from "./reducers/MailReg";
import { pageSetReducer } from "./reducers/PageSet";

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            todo: todoReducer,
            cal: calReducer,
            mailReg: mailRegReducer,
            // pageset: pageSetReducer,
        }),
        applyMiddleware(
            logger,
        )
    );

    return store;
}