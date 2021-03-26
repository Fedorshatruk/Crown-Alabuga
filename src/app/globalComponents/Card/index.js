import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => (props.bg || 'none')};
  width: ${(props) => (props.width || 'auto')};
  height: ${(props) => (props.height || 'auto')};
  box-shadow: ${(props) => (props.bShadow || 'none')};
  border-radius: ${(props) => (props.bRadius || 'none')};
  margin: ${(props) => (props.margin || 'none')};
`;