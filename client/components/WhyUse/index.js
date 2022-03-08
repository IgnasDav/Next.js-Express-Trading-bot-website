import Router from "next/router";
//Styles
import { Wrapper, Title, Info, Content, MaxWidth } from "./WhyUse.style";
//Components
import Button from "../Button";

const WhyUse = () => {
  return (
    <Wrapper>
      <MaxWidth>
        <Title>Why use us?</Title>
        <Content>
          <Info>
            <h3>Info 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sollicitudin faucibus tortor tincidunt laoreet. Ut sagittis
              facilisis pretium.
            </p>
          </Info>
          <Info>
            <h3>Info 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sollicitudin faucibus tortor tincidunt laoreet. Ut sagittis
              facilisis pretium.
            </p>
          </Info>
          <Info>
            <h3>Info 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sollicitudin faucibus tortor tincidunt laoreet. Ut sagittis
              facilisis pretium.
            </p>
          </Info>
        </Content>
        <Button
          text="Why use us?"
          onClick={() => {
            Router.push("/why-use");
          }}
        />
      </MaxWidth>
    </Wrapper>
  );
};

export default WhyUse;
