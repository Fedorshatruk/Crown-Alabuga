// global components
import { WrapperBG, Title, GridWrapper } from '../../globalComponents';
// assets
import bgImage from '../../../assets/bg-session.jpg';

export const SessionsPage = props => {
  return (
    <WrapperBG rapperBG bg={bgImage}>
      <Title
        color="var(--color-typo-game)"
        bold
        margin="var(--margin-l)"
      >
        Добро пожаловать, путник!
      </Title>
      <GridWrapper
        gGap="var(--grid-gap)"
        gTColumns="repeat(auto-fill, minmax(350px, 1fr))"
        gARows="170px"
        gTRows="repeat(auto-fit, 170px)"
        gAFlow="dense"
      >
          {props.sessions}
      </GridWrapper>
    </WrapperBG>
  );
};
