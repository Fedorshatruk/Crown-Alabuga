import styled from 'styled-components';

export const UniversalWrapper = styled.div`
  position: ${(props) => (props.position || 'inherit')};
  display: ${(props) => (props.display || 'block')};

  flex-direction: ${(props) => (props.fDirection || 'row')};
  justify-content: ${(props) => props.dColumn || 'center'};
  align-items: ${(props) => props.aItems || 'center'};

  overflow: ${(props) => (props.oScroll || 'hidden')};

  background: ${(props) => (props.background || 'transparent')};
  color: ${(props) => (props.color || 'white')};
  box-shadow: ${(props) => (props.bShadow || 'none')};

  height: ${(props) => (props.height || 'auto')};
  width: ${(props) => (props.width || 'auto')};
  padding: ${(props) => (props.padding || 'none')};
  margin: ${(props) => (props.margin || 'none')};
  
  border-radius: ${(props) => (props.bRadius || 'none')};
`;
