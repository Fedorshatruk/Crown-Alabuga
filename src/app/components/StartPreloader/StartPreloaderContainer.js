import React from 'react';

import {connect} from "react-redux";

import StartPreloader from "./StartPreloader";



const StartPreloaderContainer = props => {
    return <StartPreloader/>
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        games: state.games,
    }
}

export default (connect(mapStateToProps))(StartPreloaderContainer)