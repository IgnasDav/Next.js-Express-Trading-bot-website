import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: var(--width);
  display: grid;
  grid-template-rows: 10rem 15rem;
  row-gap: 5rem;
  justify-content: center;
  color: var(--white);
  font-size: 3.6rem;
`;
