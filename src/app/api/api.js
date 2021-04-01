import * as axios from "axios";
import {read_cookie} from "sfcookies";

const BASE_URL = 'http://192.168.0.107:8000'
const AUTH = '/auth/'
const GAME = '/game/'
const SESSION = "session-admin/"
const JOIN = 'join/'

export const authApi = {
    loginApi(username="", password="" ) {
        return axios.post(
            `${BASE_URL}${AUTH}token/login/`,
            {
                password,
                username
            }
        )
    },
    registerApi(password="", username="") {
        return axios.post(
            `${BASE_URL}${AUTH}users/`,
            {
                password,
                username
            }
        )
    },
    getMe() {
        return axios.get(`${BASE_URL}${AUTH}users/me/`, {headers: {Authorization: read_cookie('Token')}})},
    joinSession(id){
        return axios.post(`${BASE_URL}${GAME}${JOIN}${id}/`,"", {headers: {Authorization: read_cookie('Token')}})
    }
}

export const sessionApi = {
    getSessions() {return axios.get(`${BASE_URL}${GAME}${SESSION}`, {headers: {Authorization: read_cookie('Token')}})},

}

export const producerApi = {
    getProducerData(playerId){
        return axios.get(`${BASE_URL}${GAME}player/${playerId}/`, {headers: {Authorization: read_cookie('Token')}})
    }
}