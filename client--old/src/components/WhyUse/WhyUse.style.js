import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
  color: var(--white);
  margin-bottom: 20rem;
`;
export const MaxWidth = styled.div`
  width: var(--width);
`;
export const Title = styled.h2`
  font-size: 5.2rem;
  text-align: end;
  margin-bottom: 15rem;
`;
export const Info = styled.div`
  text-align: center;
  h3 {
    font-size: 4.6rem;
  }
  p {
    font-size: 2.4rem;
  }
  margin-bottom: 13rem;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
