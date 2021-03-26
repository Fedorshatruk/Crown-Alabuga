// global components
import { PesoIcon } from '../../../../../globalComponents';
// assets
import iconImage from '../../../../../../assets/MapIcon.png';

export const CrownMap = () => {
  return (
    <PesoIcon
      bg={iconImage}
      width="var(--width-mini-icon)"
      height="var(--height-high-icon)"
    />
  );
};
