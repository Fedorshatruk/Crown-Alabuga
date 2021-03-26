// components Header
import { FlexWrapper } from '../../../../globalComponents';
import { AmountOfPeso, SessionStage, Timer } from './index';

export const Header = () => {
  return (
    <FlexWrapper height="var(--height-mini-flex)" jContent="space-between">
      <AmountOfPeso />
      <SessionStage />
      <Timer />
    </FlexWrapper>
  );
};
