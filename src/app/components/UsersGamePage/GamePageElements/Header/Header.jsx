// components Header
import { FlexWrapper } from '../../../../globalComponents';
// elements
import { AmountOfPeso, SessionStage, Timer } from './index';

export const Header = () => {
  return (
    <FlexWrapper 
      width="100%"
      height="var(--height-mini-flex)"
      jContent="space-between"
    >
      <AmountOfPeso />
      <SessionStage />
      <Timer />
    </FlexWrapper>
  );
};
