import React, {useEffect, useState} from 'react';

import {connect} from "react-redux";
import { Redirect } from 'react-router';
import {getAllSessions} from "../../bus/Reducer/sessionReducer";
import {SessionsPage} from "./SessionsPage";
import {ItemSession} from "./ItemSession/ItemSession";
import {joinSession} from "../../bus/Reducer/authReducer";


const SessionPageContainer = props => {
    const [start, setStart] = useState({start: false, sessionId: null})
    const [sessions, setSession] = useState("")

    useEffect(() => {
        if (start.start) {
            props.joinSession(start.sessionId)
        }
    }, [start])

    useEffect(() => {
        if (props.games.sessions === null && props.auth.isAuth) {
            props.getAllSessions()
        }
        if (props.games.sessions !== null && props.auth.isAuth) {
            setSession(props.games.sessions.map(session => <ItemSession
                key={`session${session.id}`} session={session} setStart={setStart}/>))
        }
    }, [props])
    if (!props.auth.isAuth) {return <Redirect to="/auth" />}
    if (!props.auth.isAuth) {return <Redirect to="/auth" />}
    if (start.start) {return <Redirect to={"/start"}/>}
    return <SessionsPage sessions={sessions}/>
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        games: state.games,
        joinSession,
        getAllSessions
    }
}

export default (connect(mapStateToProps, {getAllSessions, joinSession}))(SessionPageContainer)