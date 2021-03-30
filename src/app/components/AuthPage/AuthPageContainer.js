// components

// global components

// assets

// instruments
import React, {useEffect} from 'react';
import {authMe, userLogin} from "../../bus/Reducer/authReducer";
import {connect} from "react-redux";
import {AuthPage} from "./AuthPage";
import { Redirect } from 'react-router';


const AuthPageContainer = props => {
    if (props.auth.isAuth) {return <Redirect to="/sessions" />}
    return <AuthPage auth={props.auth} userLogin={props.userLogin} authMe={props.authMe}/>
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        userLogin: userLogin,
        authMe: authMe
    }
}



export default (connect(mapStateToProps, {userLogin, authMe}))(AuthPageContainer)