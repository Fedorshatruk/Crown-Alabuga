import styled from 'styled-components';

export const Button = styled.button`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  justify-content: ${(props) => (props.jContent || 'center')};
  align-items: ${(props) => (props.aItems || 'center')};

  background: ${(props) => (props.bg || 'var(--color-bg-brown)')};
  color: ${(props) => (props.color || 'var(--color-typo-normal)')};
  border: ${(props) => (props.border || 'none')};
  border-radius: ${(props) => (props.bRadius || 'var(--radius-m)')};
  box-shadow: ${(props) => (props.bShadow || 'var(--shadow-main)')};
  cursor: pointer;

  padding: ${(props) => (props.padding || 'none')};
  margin: ${(props) => (props.margin || 'none')};

  font-family: Gothic;
  font-size: var(--mini-fz);
  font-weight: ${(props) => (props.fWeight || 'bold')};
  letter-spacing: ${(props) => (props.lSpasing || '2px')};

  height: ${(props) => (props.height || 'var(--height-button)')};
  width: ${(props) => (props.width || 'var(--width-button)')};
  ;
`;