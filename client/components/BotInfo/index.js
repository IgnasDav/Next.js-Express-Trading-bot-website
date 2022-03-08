import Router from "next/router";

//Styles
import {
  Wrapper,
  Content,
  Title,
  Info,
  BotInfoDiv,
  BotInfoDetails,
  BotInfoDetailsTotal,
  BotInfoDetailsRevenue,
  BotInfoDetailsLoss,
} from "./BotInfo.style";
//Components
import Button from "../Button";

const BotInfo = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Bots</Title>
        <BotInfoDiv>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sollicitudin faucibus tortor tincidunt laoreet. Ut sagittis
            facilisis pretium. Duis et iaculis velit, ut tincidunt lorem.
          </Info>
          <BotInfoDetails>
            <BotInfoDetailsTotal>Bots Total:</BotInfoDetailsTotal>
            <BotInfoDetailsRevenue>
              Bots Total Revenue: $52.2125
            </BotInfoDetailsRevenue>
            <BotInfoDetailsLoss>Bots Total Loss: - $5111111</BotInfoDetailsLoss>
          </BotInfoDetails>
        </BotInfoDiv>
        <Button
          text="More About Bots"
          color="#4CC9F0"
          onClick={() => {
            Router.push("/bots");
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default BotInfo;
