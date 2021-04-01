import {producerApi} from "../../api/api";


const SET_PRODUCER_DATA = 'SET_PRODUCER_DATA'
let initialState = {
    producer: null
};

/*
{
  "id": 19,
  "user": 22,
  "nickname": "test11",
  "role": "producer",
  "role_info": {
    "id": 7,
    "city": "IV",
    "balance": 3400,
    "billets_produced": 0,
    "billets_stored": 0,
    "is_bankrupt": false,
    "status": "OK",
    "transactions": []
  },
  "session": 1
}
*/

export const producerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCER_DATA:
            return {
                ...state,
                producer: action.data,
            };
        default:
            return state;
    }
};

export const setProducerData = (playerData) => ({type:SET_PRODUCER_DATA, data: playerData})


export const getProducerData = (playerId) => (dispatch) => {
    producerApi.getProducerData(playerId)
        .then(response => {
            if (response.status === 200) {
                dispatch(setProducerData(response.data));
            }
        })
        .catch(error => {
            /*TODO Необходима нормальная обработка ошибок*/
            console.log(error.response.data)
        })
};