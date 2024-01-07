import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--font);
  margin-left: auto;
  margin-right: auto;
  margin-top: 8vh;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0 9vw;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 70vw;
  }
`;

export const Map = styled.div`
  height: 500px;
  padding: 2vh;
  margin: 10vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 80vw;
    margin: 13px;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
