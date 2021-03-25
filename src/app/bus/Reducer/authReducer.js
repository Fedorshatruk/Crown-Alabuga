import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  username: null,
  isAuth: true
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setUserDataAC = (userId, username) => ({
  type: SET_USER_DATA,
  data: { userId, username },
});

export const login = (username, password) => (dispatch) => {
  authAPI.login(username, password)
  .thten(response => {
    if (response.data.resultCode === 0) {

    }
  })
}