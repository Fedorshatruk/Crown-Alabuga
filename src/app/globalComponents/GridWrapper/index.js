import styled from 'styled-components'

export const GridWrapper = styled.div`
  width: ${(props) => (props.width ? (props) : '100vw')};
  height: ${(props) => (props.height ? (props) : '100vh')};
  overflow-y: auto;
  display: grid;
  padding: ${(props) => (props.padding || 'var(--padding-min-card, --padding-max-card)')};
  grid-gap: ${(props) => (props.gGap || 'none')};
  grid-template-columns: ${(props) => (props.gTColumns || 'none')};
  grid-auto-rows: ${(props) => (props.gARows || 'none')};
  grid-template-rows: ${(props) => (props.gTRows || 'none')};
  grid-auto-flow: ${(props) => (props.gAFlow || 'none')}; 
  align-items: ${(props) => (props.aItems || 'center')};
  justify-items: ${(props) => (props.jItems || 'center')};
`;