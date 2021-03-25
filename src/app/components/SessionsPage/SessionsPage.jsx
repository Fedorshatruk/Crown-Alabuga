// global components
import {
  WrapperBG,
  Title,
  GridWrapper,
} from '../../globalComponents';
// assets
import bgImage from '../../../assets/bg-session.jpg';

import { ItemSession } from './ItemSession/ItemSession';

export const SessionsPage = () => {
  return (
    <WrapperBG rapperBG bg={bgImage}>
      <Title
        color="var(--color-typo-game)"
        fWeight="bold"
        lSpasing="1px"
        margin="var(--margin-l)"
      >
        Добро пожаловать, путник!
      </Title>
      <GridWrapper>
        <ItemSession />
        <ItemSession />
        <ItemSession />
        <ItemSession />
        <ItemSession />
        <ItemSession />
        <ItemSession />
        <ItemSession />
        <ItemSession />
        <ItemSession />
      </GridWrapper>
    </WrapperBG>
  );
};
