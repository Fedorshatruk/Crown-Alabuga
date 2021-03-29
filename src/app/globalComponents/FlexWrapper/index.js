import styled from 'styled-components';

export const FlexWrapper = styled.div`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || 'none'};

  display: flex;
  flex-direction: ${(props) => props.fDirection || 'row'};
  justify-content: ${(props) => props.jContent || 'center'};
  align-items: ${(props) => props.aItems || 'center'};
  padding: ${(props) => props.padding || 'none'};
`;
