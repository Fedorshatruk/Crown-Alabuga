import styled from 'styled-components';

export const WrapperBG = styled.div`
  position: relative;
  background: url(${(props) => (props.bg ? props.bg : '#bf9063')}) no-repeat bottom / cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
