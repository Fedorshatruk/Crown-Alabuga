import styled from 'styled-components';

export const Title = styled.div`
  font-family: ${(props) => (props.fontFamily || 'Gothic')};
  font-size: ${(props) => (props.fSize || 'var(--title-fz)')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  letter-spacing: ${(props) => (props.lSpasing || '1px')};
  text-align: ${(props) => (props.tAlign || 'center')};
  margin: ${(props) => (props.margin || 'none')};
  padding: ${(props) => (props.padding || 'none')};
  color: ${(props) => (props.color || 'var(--color-typo-browm)')};
`;
