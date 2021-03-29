import {
  Card,
  FlexWrapper,
  Icon,
  Subtitle,
} from '../../../../../../../../globalComponents';

import iconImage from '../../../../../../../../../assets/PesoIcon.png';

export const SendOfDealsProd = () => {
  return (
    <FlexWrapper margin="var(--margin-l) 0 0 0">
      <Card
        width="var(--width-mini-extra-game-card)"
        height="var(--height-mini-game-card)"
        margin="0 var(--margin-m)"
        padding="var(--padding-m)"
      >
        <FlexWrapper fDirection="column">
          <Subtitle fSize="var(--subtitle-fz-game)" lSpasing="2px" margin="0 0 var(--margin-l) 0">
            Производится
          </Subtitle>
          <FlexWrapper>
            <Subtitle
              fSize="var(--subtitle-fz-game)"
              color="var(--color-typo-default)"
              lSpasing="2px"
            >
              10 шт - 
            </Subtitle>
            <FlexWrapper>
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
                300
              </Subtitle>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Card>
      <Card
        width="var(--width-mini-extra-game-card)"
        height="var(--height-mini-game-card)"
        margin="0 var(--margin-m)"
        padding="var(--padding-m)"
      >
        <FlexWrapper fDirection="column">
          <Subtitle fSize="var(--subtitle-fz-game)" lSpasing="2px" margin="0 0 var(--margin-l) 0">
            Оплата склада
          </Subtitle>
          <FlexWrapper>
            <Subtitle
              fSize="var(--subtitle-fz-game)"
              color="var(--color-typo-default)"
              lSpasing="2px"
            >
              10 шт - 
            </Subtitle>
            <FlexWrapper>
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
                200
              </Subtitle>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Card>
    </FlexWrapper>
  );
};
