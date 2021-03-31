import { authApi } from "../../api/api";
import {bake_cookie} from "sfcookies";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_IS_REGISTER = 'SET_IS_REGISTER'
const SET_AUTH_ERROR = 'SET_AUTH_ERROR'

let initialState = {
    userId: null,
    username: null,
    isAuth: false,
    isRegister: false,
    authError: null
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
          };
      case SET_IS_REGISTER:
          return {
              ...state,
              isRegister: action.data
          };
      case SET_AUTH_ERROR:
          return {
              ...state,
              authError: action.data
          }
    default:
      return state;
  }
};

export const setUserDataAC = (userId, username) => ({type: SET_USER_DATA, data: { userId, username }});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, data: isAuth});
export const setIsRegister = (isRegister) => ({type: SET_IS_REGISTER, data: isRegister})
export const setAuthError = (authError) => ({type: SET_AUTH_ERROR, data: authError})


export const userRegister = (username, password) => (dispatch) => {
  authApi.registerApi(password, username)
      .then(response => {
        if (response.status === 201) {
            dispatch(setIsRegister(true))
            /*TODO Обрабока флоу успешной регистрации*/
            window.alert("Поздравляем с регистрацией, пройдите авторизацию")
            dispatch(setUserDataAC(response.data.id, response.data.username))
        }
      }
      )
      .catch(error => {
          /*TODO Надо сиправить логику обработки ошибок*/
          let message
          dispatch(setAuthError(error.response.data))
          error.response.data.username ?
              message = error.response.data.username[0]:
              message = error.response.data.password[0]
          window.alert(message)
      })
};

export const authMe = () => (dispatch) => {
    authApi.getMe()
        .then(response => {
            dispatch(setUserDataAC(response.data.id, response.data.username))
            dispatch(setIsAuth(true))
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