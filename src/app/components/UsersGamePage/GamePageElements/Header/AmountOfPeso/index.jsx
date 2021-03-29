// global components
import { FlexWrapper, Icon, Title } from '../../../../../globalComponents';
// assets
import iconImage from '../../../../../../assets/PesoIcon.png';

export const AmountOfPeso = () => {
  return (
    <FlexWrapper
      jContent="space-between"
      width="var(--width-mini-flex)"
      height="var(--height-mini-flex)"
    >
      <Icon
        bg={iconImage}
        width="var(--width-main-icon)"
        height="var(--height-main-icon)"
      />
      <Title color="var(--color-typo-game)" bold>
        6000
      </Title>
    </FlexWrapper>
  );
};
