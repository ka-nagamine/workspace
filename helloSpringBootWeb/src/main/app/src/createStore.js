import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { todoReducer } from "./reducers/Todo";
import { calReducer } from "./reducers/Cal";
import { pageSetReducer } from "./reducers/PageSet";

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            todo: todoReducer,
            cal: calReducer,
            // pageset: pageSetReducer,
        }),
        applyMiddleware(
            logger,
        )
    );

    return store;
}