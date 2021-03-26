import styled from 'styled-components';

export const PesoIcon = styled.img`
  position: relative;
  background: url(${(props) => (props.bg ? props.bg : '#bf9063')}) no-repeat
    bottom / cover;
  width: ${(props) => (props.width || 'auto')};
  height: ${(props) => (props.height || 'auto')};
  overflow: hidden;
`;
