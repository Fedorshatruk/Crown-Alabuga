import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => (props.bg || 'var(--color-bg-main)')};
  width: ${(props) => (props.width || 'var(--width-main-game-card)')};
  height: ${(props) => (props.height || 'none')};
  box-shadow: ${(props) => (props.bShadow || 'var(--shadow-normal)')};
  border-radius: ${(props) => (props.bRadius || 'var(--radius-m)')};
  margin: ${(props) => (props.margin || 'none')};
  padding: ${(props) => (props.padding || 'none')};
`;