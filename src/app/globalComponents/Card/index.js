import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => (props.bg || 'none')};
  width: 100%;
  height: 100%;
  box-shadow: ${(props) => (props.bShadow || 'none')};
  border-radius: ${(props) => (props.bRadius || 'none')};
`;