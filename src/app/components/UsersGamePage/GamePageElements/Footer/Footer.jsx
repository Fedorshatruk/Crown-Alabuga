// global components
import { FlexWrapper } from '../../../../globalComponents';
// elements
import { CrownMap, Tutorial } from './index';

export const Footer = () => {
  return (
    <FlexWrapper 
      width="100%"
      jContent="space-between"
      height="5vh"
    >
      <Tutorial />
      <CrownMap />
    </FlexWrapper>
  );
};
