import { Card, Subtitle } from '../../../globalComponents';
import { FlexWrapper } from '../../../globalComponents/FlexWrapper';

export const ItemSession = props => {
  return (
    <Card width="100%" height="100%" padding="var(--padding-l)">
      <Subtitle
        margin="0 0 var(--margin-l) 0"
        color="var(--color-typo-default)"
      >
          <span
              sessionId={props.session.id}
            style={{cursor:"pointer"}}
            onClick={(event => {
                props.setStart({start: true, sessionId: event.target.getAttribute('sessionId')})
            })}
          >Название игры: {props.session.name}</span>

      </Subtitle>
      <FlexWrapper
        height="var(--height-main-flex)"
        fDirection="column"
        jContent="space-around"
        aItems="flex-start"
      >
        <Subtitle fSize="var(--subtitle-fz-game)" lSpasing="1px">
          Режим: {props.session.game_type}
        </Subtitle>
        <Subtitle fSize="var(--subtitle-fz-game)" lSpasing="1px">
          Количество игроков: {
            `${props.session.number_of_players.slice(0, 2)}/${props.session.number_of_players.slice(3)}`
        }
        </Subtitle>
      </FlexWrapper>
    </Card>
  );
};
