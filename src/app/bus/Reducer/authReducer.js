import { authApi } from "../../api/api";
import {bake_cookie} from "sfcookies";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH'

let initialState = {
    userId: null,
    username: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
      case SET_IS_AUTH:
          return {
              ...state,
              isAuth: action.data
          }
    default:
      return state;
  }
};

export const setUserDataAC = (userId, username) => ({
  type: SET_USER_DATA,
  data: { userId, username },
});

export const setIsAuth = (isAuth) => ({
    type: SET_IS_AUTH,
    data: isAuth,
});

export const userRegister = (username, password) => (dispatch) => {
  authApi.registerApi(password, username)
      .then(response => {
        if (response.status === 201)
        {
            dispatch(setUserDataAC(response.data.id, response.data.username))
        }
      }
      )
};

export const authMe = () => (dispatch) => {
    authApi.getMe()
        .then(response => {
            dispatch(setUserDataAC(response.data.id, response.data.username))
        })
}

export const userLogin = (username, password) => (dispatch) => {
  authApi.loginApi(username, password)
  .then(response => {
      console.log(response)
    if (response.status === 200) {
        bake_cookie("Token", `Token ${response.data.auth_token}`)
        dispatch(setIsAuth(true));
    }
  })
};