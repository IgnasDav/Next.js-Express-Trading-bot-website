import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  color: var(--pink);
  margin-top: 10rem;
  margin-bottom: 10rem;
`;
export const Content = styled.div`
  width: var(--width);
  display: grid;
  .g-end {
    justify-self: end;
    align-self: flex-end;
    grid-row: 2/3;
    grid-column: 1 /2;
  }
`;
export const CoinInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  row-gap: 4rem;
  grid-row: 2/3;
  grid-column: 1 /2;
`;
export const Title = styled.h2`
  font-size: 6.4rem;
  text-transform: uppercase;
  text-align: start;
  margin-bottom: 10rem;
`;
export const CoinInfoDetails = styled.div`
  border-bottom: 3px solid var(--pink);
  border-left: 3px solid var(--pink);
  border-right: 3px solid var(--pink);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  /* border-radius: 5rem; */
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  font-size: 3.6rem;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
export const Price = styled.p``;
export const LogoTitle = styled.p`
  margin: 0 1rem 0 0.2rem;
`;
export const LogoPic = styled.img`
  width: 5.7rem;
  height: 5.7rem;
  margin: 0 1rem 0 1rem;
`;
export const Graph = styled.div`
  position: relative;
  :hover .graphInfo {
    opacity: 1;
  }
  .graphInfo {
    opacity: 0;
    transition: all 0.2s;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 25rem;
  }
`;
export const GraphInfo = styled.div``;
