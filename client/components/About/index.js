import Link from "next/link";
import Router from "next/router";
//Styles
import { Wrapper, Content, Info } from "./About.styles";
//Components
import Button from "../Button";

const About = () => {
  return (
    <Wrapper>
      <Content>
        <Info>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sollicitudin faucibus tortor tincidunt laoreet. Ut sagittis
            facilisis pretium. Duis et iaculis velit, ut tincidunt lorem. In
            quis turpis sollicitudin, malesuada neque at, sodales mauris.
            Pellentesque at maximus orci. In eget orci accumsan, facilisis magna
            ac,
          </p>
        </Info>
        <Button
          text="About"
          onClick={() => {
            Router.push("/about-us");
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default About;
