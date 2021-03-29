import {
  FlexWrapper,
  Icon,
  Subtitle,
} from '../../../../../../../../globalComponents';
import iconImage from '../../../../../../../../../assets/PesoIcon.png';

export const CostOfDetails = () => {
  return (
    <FlexWrapper width="80%" jContent="space-between">
      <Subtitle
        fSize="var(--subtitle-fz-game)"
        color="var(--color-typo-default)"
        lSpasing="2px"
      >
        Затраты
      </Subtitle>
      <FlexWrapper width="var(--width-main-icon)" jContent="space-between">
        <Icon
          bg={iconImage}
          width="var(--width-mini-icon)"
          height="var(--height-mini-icon)"
        />
        <Subtitle
          fSize="var(--subtitle-fz-game)"
          color="var(--color-typo-default)"
          lSpasing="2px"
        >
          0
        </Subtitle>
      </FlexWrapper>
    </FlexWrapper>
  );
};
