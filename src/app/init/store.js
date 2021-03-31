import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form';
import { authReducer } from "../bus/Reducer/authReducer";
import thunkMiddleware from "redux-thunk";
import {sessionsReducer} from "../bus/Reducer/sessionReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  games: sessionsReducer,
  form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;