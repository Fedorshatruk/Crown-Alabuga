import styled from 'styled-components';

export const PesoIcon = styled.div`
  position: relative;
  background: url(${(props) => (props.bg ? props.bg : '#bf9063')}) no-repeat
    center / contain;
  width: ${(props) => (props.width || 'auto')};
  height: ${(props) => (props.height || 'auto')};
  overflow: hidden;
`;
