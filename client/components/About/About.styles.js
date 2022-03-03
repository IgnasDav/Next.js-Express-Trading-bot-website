import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;
export const Content = styled.div`
  display: flex;
  width: var(--width);
  justify-content: space-between;
`;
export const Info = styled.div`
  font-family: inherit;
  color: white;
  h2 {
    font-size: 6.4rem;
  }
  p {
    padding-top: 1rem;
    width: 80rem;
    font-size: 2.4rem;
  }
`;
