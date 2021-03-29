import styled from 'styled-components';

export const Subtitle = styled.div`
  font-family: ${(props) => props.fontFamily || 'Gothic'};
  font-size: ${(props) => props.fSize || 'var(--subtitle-fz)'};
  font-weight: ${(props) => props.fWeight || 'normal'};
  letter-spacing: ${(props) => props.lSpasing || 'none'};
  text-align: ${(props) => props.tAlign || 'center'};
  margin: ${(props) => props.margin || 'none'};
  padding: ${(props) => props.padding || 'none'};
  color: ${(props) => props.color || 'var(--color-typo-browm)'};
`;
