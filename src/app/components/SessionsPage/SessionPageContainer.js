import React, {useEffect, useState} from 'react';

import {connect} from "react-redux";
import { Redirect } from 'react-router';
import {getAllSessions} from "../../bus/Reducer/sessionReducer";
import {SessionsPage} from "./SessionsPage";
import {ItemSession} from "./ItemSession/ItemSession";


const SessionPageContainer = props => {
    const [sessions, setSession] = useState("")
    useEffect(() => {
        if (props.games.sessions === null && props.auth.isAuth) {
            props.getAllSessions()
        }
        if (props.games.sessions !== null && props.auth.isAuth) {
            setSession(props.games.sessions.map(session => <ItemSession session={session}/>))
        }
    }, [props])
    if (!props.auth.isAuth) {return <Redirect to="/auth" />}
    if (props.games.sessions === null) {return ""}
    return <SessionsPage sessions={sessions}/>
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        games: state.games,
        getAllSessions:getAllSessions
    }
}

export default (connect(mapStateToProps, {getAllSessions}))(SessionPageContainer)