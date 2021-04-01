import React from 'react';
import {preloaderContainerProperty, preloaderProperty} from "../../styles/preloaderPropyty";
/*Libraries*/
import ReactLoading from 'react-loading';
import bgImage from "../../../assets/bg-auth.jpg";
import {FlexWrapper, Title, WrapperBG} from "../../globalComponents";

const StartPreloader = props => {
    return(
        <WrapperBG bg={bgImage}>
            <Title
                color="var(--color-typo-game)"
                bold
                margin="var(--margin-l)"
            >
                Ожидание игроков
            </Title>
            <div style={{ ...preloaderContainerProperty}}>
                <ReactLoading {...preloaderProperty}/>
            </div>
        </WrapperBG>
    )
}
export default StartPreloader