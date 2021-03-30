// components

// global components

// assets

// instruments
import React from 'react';
import {authMe, userRegister} from "../../bus/Reducer/authReducer";
import {connect} from "react-redux";
import {LoginPage} from "./LoginPage";


const LoginPageContainer = props => {
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