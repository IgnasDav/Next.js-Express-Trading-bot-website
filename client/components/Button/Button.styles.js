import styled from "styled-components";

export const Wrapper = styled.button`
  border: 3px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background-color: transparent;
  border-radius: 5rem;
  width: 30rem;
  font-family: inherit;
  height: 5rem;
  display: flex;
  transition: all 0.2s;
  text-transform: uppercase;
  p {
    width: 300%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
  }
  :hover {
    border: 3px solid var(--blue);
    color: var(--blue);
    cursor: pointer;
    --webkit-box-shadow: 0px 0px 5px -3px #4cc9f0, 10px 10px 21px -3px #f72585,
      -10px 0px 21px -3px #4cc9f0, 0px -10px 21px -3px rgba(114, 9, 183, 0.84);
    box-shadow: 0px 0px 21px -3px #4cc9f0, 10px 10px 21px -3px #f72585,
      -10px 0px 21px -3px #4cc9f0, 0px -10px 21px -3px rgba(114, 9, 183, 0.84);
  }
`;
export const Arrow = styled.div`
  border-left: 3px solid ${(props) => props.color};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0rem 5rem 5rem 0;
  .arrow {
    height: 2.5rem;
  }
`;
