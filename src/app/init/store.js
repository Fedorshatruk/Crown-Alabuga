import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form';
import { authReducer } from "../bus/Reducer/authReducer";
import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;