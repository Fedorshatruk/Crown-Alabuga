// components

// global components

// assets

// instruments
import React from 'react';
import {authMe, userRegister} from "../../bus/Reducer/authReducer";
import {connect} from "react-redux";
import {LoginPage} from "./LoginPage";
import {Redirect} from "react-router";


const LoginPageContainer = props => {
    if (props.auth.isRegister) { return <Redirect to="/auth"/> }
    return <LoginPage auth={props.auth} userRegister={props.userRegister} authMe={props.authMe}/>
}
let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        userRegister: userRegister,
        authMe: authMe
    }
}



export default (connect(mapStateToProps, {userRegister, authMe}))(LoginPageContainer)