import React, {useEffect, useState} from 'react';

import {connect} from "react-redux";

import StartPreloader from "./StartPreloader";
import {Redirect} from "react-router";



const StartPreloaderContainer = props => {
    const [socket, setSocket] = useState(new WebSocket("ws://127.0.0.1:8000/ws/detail/65/"))
    const [message, setMessage] = useState('')
    socket.onmessage = function(event) {setMessage(JSON.parse(event.data))};
    useEffect(()=> {
        debugger
        switch (message.action) {
            case 'start_game':
                setRedirect(true)}
    }, [message])

    const [redirect, setRedirect] = useState(false)
    if (redirect) {
        return <Redirect to={'/producer'}/>
    }
    return <StartPreloader/>
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        games: state.games,
    }
}

export default (connect(mapStateToProps))(StartPreloaderContainer)