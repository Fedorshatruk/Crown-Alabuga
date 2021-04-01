import {sessionApi} from "../../api/api";


const SET_SESSIONS = 'SET_SESSIONS'
const SET_DETAIL_SESSION = 'SET_DETAIL_SESSION'
let initialState = {
    sessions: null,
    sessionDetail: null
};
/* {
    "id": 1,
    "name": "test",
    "game_type": "normal",
    "number_of_players": "12-14",
    "turn_count": 5,
    "number_of_brokers": 3,
    "crown_balance": 0,
    "status": "initialized",
    "broker_starting_balance": 8000,
    "producer_starting_balance": 4000,
    "transaction_limit": 2000,
    "current_turn": 0,
    "players": 0
  }*/
export const sessionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSIONS:
            return {
                ...state,
                sessions: action.data,
            };
        case SET_DETAIL_SESSION:
            return {
                ...state,
                sessionDetail: action.data,
            };
        default:
            return state;
    }
};

export const setSessions = (sessions) => ({type:SET_SESSIONS, data: sessions})
export const setDetailSession = (session) => ({type:SET_DETAIL_SESSION, data: session})

export const getAllSessions = () => (dispatch) => {
    sessionApi.getSessions()
        .then(response => {
            if (response.status === 200) {
                dispatch(setSessions(response.data))
            }
        })
        .catch(error => {
            /*TODO Необходима нормальная обработка ошибок*/
            console.log(error.response)
        })
}