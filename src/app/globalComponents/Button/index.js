import styled from 'styled-components';

export const Button = styled.button`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  justify-content: ${(props) => (props.jContent || 'center')};
  align-items: ${(props) => (props.aItems || 'center')};

  background: ${(props) => (props.bg || 'none')};
  color: ${(props) => (props.color || 'var(--color-typo-default)')};
  border: ${(props) => (props.border || 'none')};
  border-radius: ${(props) => (props.bRadius || 'none')};
  box-shadow: ${(props) => (props.bShadow || 'none')};
  cursor: pointer;

  padding: ${(props) => (props.padding || 'none')};
  margin: ${(props) => (props.margin || 'none')};

  font-family: Gothic;
  font-size: var(--mini-fz);
  font-weight: ${(props) => (props.fWeight || 'normal')};
  letter-spacing: ${(props) => (props.lSpasing || 'none')};

  height: ${(props) => (props.height || 'auto')};
  width: ${(props) => (props.width || 'auto')};
  ;
`;