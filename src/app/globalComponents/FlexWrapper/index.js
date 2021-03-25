import styled from 'styled-components';

export const FlexWrapper = styled.div`
  /* width: 100vw; */
  height: var(--height-card-item); 
  margin: ${(props) => (props.margin || 'none')};

  display: ${(props) => props.display || 'block'};
  flex-direction: ${(props) => props.fDirection || 'row'};
  justify-content: ${(props) => props.jContent || 'center'};
  align-items: ${(props) => props.aItems || 'center'};
`;
