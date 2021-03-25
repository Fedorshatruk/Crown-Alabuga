import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import { authReducer } from "../bus/Reducer/authReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
})

export const store = createStore(rootReducer);

window.store = store;