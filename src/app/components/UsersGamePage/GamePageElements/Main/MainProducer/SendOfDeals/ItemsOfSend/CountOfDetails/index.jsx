import {
  FlexWrapper,
  Subtitle,
} from '../../../../../../../../globalComponents';

export const CountOfDetails = () => {
  return (
    <FlexWrapper width="80%" jContent="space-between">
      <Subtitle
        fSize="var(--subtitle-fz-game)"
        color="var(--color-typo-default)"
        lSpasing="2px"
      >
        Заготовок
      </Subtitle>
      <Subtitle
        fSize="var(--subtitle-fz-game)"
        color="var(--color-typo-default)"
        lSpasing="2px"
      >
        ...
      </Subtitle>
    </FlexWrapper>
  );
};
