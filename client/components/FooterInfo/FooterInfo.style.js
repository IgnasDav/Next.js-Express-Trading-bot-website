import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
  color: var(--white);
`;
export const Content = styled.div`
  width: var(--width);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 3.6rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 6rem;
    font-size: 2.4rem;
  }
  input {
    height: 5rem;
    width: 40rem;
  }
  textarea {
    height: 16rem;
    width: 40rem;
  }
  input,
  textarea {
    border: 3px solid var(--white);
    background-color: black;
    color: var(--white);
    margin-bottom: 3rem;
    font-size: 2.4rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .form-btn {
    border-radius: 0.5rem;
    p {
      margin-bottom: 0;
    }
  }
`;

export const Sitemap = styled.div`
  h3 {
    margin-bottom: 10rem;
    text-align: center;
    font-size: 3.6rem;
  }
`;
export const SitemapNav = styled.ul`
  list-style: none;
  text-align: center;
  font-size: 3.6rem;
  li {
    margin-bottom: 1rem;
    p {
      color: var(--white);
      cursor: pointer;
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
  }
`;
export const InfoDiv = styled.div`
  display: grid;
  grid-template-rows: 20rem 1fr;
`;
export const Logo = styled.div`
  height: 16rem;
  width: 16rem;
  margin-bottom: 2.5rem;
  justify-self: end;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: underline;
    transition: all 0.2s;
    font-size: 3.6rem;
    margin-bottom: 3rem;
    text-align: end;

    .icon {
      margin-right: 1.5rem;
      transition: all 0.2s;
      color: var(--pink);
      height: 4rem;
    }
    :hover {
      color: var(--pink);
    }
    :hover .icon {
      opacity: 0.7;
    }
    p {
      color: var(--blue);
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
  }
`;
