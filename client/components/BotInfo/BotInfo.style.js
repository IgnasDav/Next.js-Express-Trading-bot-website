import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
  margin-bottom: 20rem;
  color: var(--blue);
`;
export const Content = styled.div`
  width: var(--width);
`;
export const Title = styled.h2`
  font-size: 6.4rem;
  text-align: end;
  margin-bottom: 10rem;
`;
export const Info = styled.p`
  font-size: 2.4rem;
  width: 27rem;
  margin-bottom: 13rem;
`;
export const BotInfoDetails = styled.div`
  height: 15rem;
  width: 45rem;
  border-top: 3px solid var(--blue);
  border-left: 3px solid var(--blue);
  border-right: 3px solid var(--blue);
  border-radius: 3rem;
`;
export const BotInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BotInfoDetailsTotal = styled.h3`
  padding: 1rem;
  text-align: end;
  font-size: 3.6rem;
`;
export const BotInfoDetailsRevenue = styled.p`
  padding: 1rem;
  font-size: 2.4rem;
  margin-left: 1rem;
`;
export const BotInfoDetailsLoss = styled.p`
  padding: 1rem;
  font-size: 2.4rem;
  margin-left: 3rem;
`;
