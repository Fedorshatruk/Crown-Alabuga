import {connect} from "react-redux";
import React, {useEffect, useState} from "react";

import {Redirect} from "react-router";

import {getProducerData} from "../../../bus/Reducer/producerReducer";
import {ProducersPage} from "./ProducersPage";


const ProducerPageContainer = props => {
    useEffect(() => {
        if (props.producer === null) {
            props.getProducerData(props.auth.joinSession.id)
        }
    }, [props])

    if (!props.auth.isAuth) {return <Redirect to="/auth" />}
    if (!props.auth.isAuth) {return <Redirect to="/auth" />}
    return (
        <ProducersPage/>
    )

}



let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        games: state.games,
        producer: state.producerReducer.producer,
        getProducerData
    }
}

export default (connect(mapStateToProps, {getProducerData}))(ProducerPageContainer)