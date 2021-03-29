// global components
import { FlexWrapper, Icon, Title } from '../../../../../globalComponents';
// assets
import iconImage from '../../../../../../assets/TimerIcon.png';

export const Timer = () => {
  return (
    <FlexWrapper
      jContent="space-between"
      width="var(--width-mini-flex)"
      height="var(--height-mini-flex)"
    >
      <Icon
        bg={iconImage}
        width="var(--width-main-icon)"
        height="var(--height-high-icon)"
      />
      <Title
        color="var(--color-typo-game)"
        bold
        lSpasing="1px"
      >
        30:00
      </Title>
    </FlexWrapper>
  );
};
