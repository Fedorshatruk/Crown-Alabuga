import styled from 'styled-components';

export const Title = styled.div`
  font-family: ${(props) => (props.fontFamily || 'Gothic')};
  font-size: ${(props) => (props.fSize ? 'var(--title-fz-game)' : 'var(--title-fz)')};
  font-weight: ${(props) => (props.fWeight || 'normal')};
  letter-spacing: ${(props) => (props.lSpasing || 'none')};
  text-align: ${(props) => (props.tAlign || 'center')};
  margin: ${(props) => (props.margin || 'none')};
  padding: ${(props) => (props.padding || 'none')};
  color: ${(props) => (props.color || 'var(--color-typo-browm)')};
`;
