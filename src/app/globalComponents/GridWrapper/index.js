import styled from 'styled-components'

export const GridWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  padding: var(--padding-min-card, --padding-max-card);
  grid-gap: var(--grid-gap);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 165px;
  grid-template-rows: repeat(auto-fit, 165px);
  grid-auto-flow: dense; 
  align-items: center;
  justify-items: center;
`;