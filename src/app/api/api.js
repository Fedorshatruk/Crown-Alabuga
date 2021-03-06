import * as axios from "axios";
import {read_cookie} from "sfcookies";

const BASE_URL = 'http://192.168.0.107:8000'
const AUTH = '/auth/'
const GAME = '/game/'
const SESSION = "session-admin/"

export const authApi = {
    loginApi(password="", username="") {
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
        return axios.get(`${BASE_URL}${AUTH}users/me/`, {headers: {Authorization: read_cookie('Token')}})}
}

export const sessionApi = {
    getSessions() {return axios.get(`${BASE_URL}${GAME}${SESSION}`, {headers: {Authorization: read_cookie('Token')}})}
}