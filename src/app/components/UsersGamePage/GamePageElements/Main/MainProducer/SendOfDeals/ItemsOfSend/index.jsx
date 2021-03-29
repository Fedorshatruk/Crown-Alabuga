import { Button, FlexWrapper, PesoIcon, Subtitle } from "../../../../../../../globalComponents"
import iconImage from '../../../../../../../../assets/PesoIcon.png';

const CountOfDetails = () => {
    return (
        <FlexWrapper width="250px" jContent="space-between">
            <Subtitle color="var(--color-typo-default)" lSpasing="2px">Заготовок</Subtitle>
            <Subtitle color="var(--color-typo-default)">...</Subtitle>
        </FlexWrapper>
    )
}

const CostOfDetails = () => {
    return (
        <FlexWrapper width="250px" jContent="space-between">
            <Subtitle color="var(--color-typo-default)" lSpasing="2px">Затраты</Subtitle>
            <FlexWrapper width="30px" jContent="space-between">
                <PesoIcon bg={iconImage}
                    width="15px"
                    height="15px"></PesoIcon>
                <Subtitle color="var(--color-typo-default)">0</Subtitle>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export const ItemsOfSend = () => {
    return (
        <FlexWrapper height="100%" jContent="space-between" fDirection="column" padding="15px">
            <Subtitle>ЗАЯВКА НА ПРОИЗВОДСТВО</Subtitle>
            <CountOfDetails />
            <CostOfDetails />
            <Button>ПРОИЗВЕСТИ</Button>
        </FlexWrapper>
    )
}