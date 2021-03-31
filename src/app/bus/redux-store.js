import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import { authReducer } from "./Reducer/authReducer";
import {sessionsReducer} from "./Reducer/sessionReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    games: sessionsReducer,
    form: formReducer,
})

export const store = createStore(rootReducer);

window.store = store;