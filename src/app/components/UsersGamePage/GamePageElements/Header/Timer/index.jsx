// global components
import { FlexWrapper, PesoIcon, Title } from '../../../../../globalComponents';
// assets
import iconImage from '../../../../../../assets/TimerIcon.png';

export const Timer = () => {
  return (
    <FlexWrapper
      jContent="space-between"
      width="var(--width-mini-flex)"
      height="var(--height-mini-flex)"
    >
      <PesoIcon
        bg={iconImage}
        width="var(--width-mini-icon)"
        height="var(--height-high-icon)"
      />
      <Title
        fSize="var(--title-fz-game)"
        color="var(--color-typo-game)"
        fWeight="bold"
        lSpasing="1px"
      >
        30:00
      </Title>
    </FlexWrapper>
  );
};
