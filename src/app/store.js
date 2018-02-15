import { createLogger } from 'redux-logger'
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import user from "./reducers/userReducer";
import math from "./reducers/mathReducer";

// const loggers = createLogger({
//     collapsed: (getState, action, logEntry) => !logEntry.error,
//     duration: true
// });

export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);