// global components
import { FlexWrapper, PesoIcon, Title } from '../../../../../globalComponents';
// assets
import iconImage from '../../../../../../assets/PesoIcon.png';

export const AmountOfPeso = () => {
  return (
    <FlexWrapper
      jContent="space-between"
      width="var(--width-mini-flex)"
      height="var(--height-mini-flex)"
    >
      <PesoIcon
        bg={iconImage}
        width="var(--width-mini-icon)"
        height="var(--height-mini-icon)"
      />
      <Title fSize="var(--title-fz-game)" color="var(--color-typo-game)" fWeight="bold" lSpasing="1px">
        6000
      </Title>
    </FlexWrapper>
  );
};
