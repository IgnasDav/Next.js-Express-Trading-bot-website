import styled from "styled-components";

export const Wrapper = styled.article`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
`;
export const Content = styled.a`
  color: var(--white);
  text-decoration: underline;
  font-size: 5.2rem;
  transition: all 0.2s;
  :hover {
    color: var(--pink);
  }
  p {
    position: relative;
    display: inline-block;
    background: linear-gradient(
      to bottom,
      var(--pink),
      var(--pink) 60%,
      var(--pink) 60%,
      var(--pink) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    transition: background 0.2s ease-out;
    white-space: nowrap;
  }
  span {
    position: relative;
  }
  span:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--white);
    bottom: 5px;
    transition: all 0.2s ease-out;
  }
  p:hover {
    background-position: 0 11px;
    color: var(--pink);
  }
  span:hover:before {
    transform: translateY(20px);
  }
`;
