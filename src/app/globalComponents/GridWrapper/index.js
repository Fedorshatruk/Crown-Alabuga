import styled from 'styled-components'

export const GridWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  padding: var(--padding-min-card, --padding-max-card);
  grid-gap: var(--grid-gap);
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 300px;
  grid-template-rows: repeat(3, 300px);
  align-items: center;
  justify-items: center;
`;