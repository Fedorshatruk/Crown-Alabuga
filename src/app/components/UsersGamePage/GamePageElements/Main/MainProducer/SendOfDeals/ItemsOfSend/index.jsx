import {
  Button,
  FlexWrapper,
  Title,
} from '../../../../../../../globalComponents';

import { CountOfDetails } from './CountOfDetails';
import { CostOfDetails } from './CostOfDetails';

export const ItemsOfSend = () => {
  return (
    <FlexWrapper
      height="100%"
      jContent="space-between"
      fDirection="column"
      padding="var(--padding-l)"
    >
      <Title fSize="var(--title-fz-game)" lSpasing="2px">
        Заявка на производство
      </Title>
      <FlexWrapper
        width="100%"
        height="30%"
        fDirection="column"
        jContent="space-between"
      >
        <CountOfDetails />
        <CostOfDetails />
      </FlexWrapper>
      <Button>ПРОИЗВЕСТИ</Button>
    </FlexWrapper>
  );
};
