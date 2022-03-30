import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  width: var(--width);
  justify-content: space-between;
  align-items: center;
  color: var(--whites);
  font-size: 2.4rem;
  text-transform: uppercase;
`;
export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--white);
    }
    li {
      margin: 1rem;
      margin-right: 3.2rem;
      width: 100%;
      p {
        cursor: pointer;
        position: relative;
        display: inline-block;
        font-size: 2.4rem;
        background: linear-gradient(
          to bottom,
          var(--pink),
          var(--pink) 60%,
          var(--pink) 60%,
          var(--pink) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        /* color: transparent; */
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
        background: var(--pink);
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
    }
    .moon {
      padding: 1rem;
      margin-right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-out;
      border-radius: 50%;
      cursor: pointer;
      .icon {
        height: 3rem;
      }
    }
    .moon:hover {
      background: linear-gradient(
        to bottom,
        var(--blue1),
        var(--blue1) 50%,
        var(--yellow) 50%,
        var(--yellow) 100%
      );
    }
  }
`;
export const Logo = styled.div`
  height: 12rem;
  margin-top: 5rem;
  width: 12rem;
`;
