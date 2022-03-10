import Router from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import content from "../../content";
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
  const botProfits = useSelector((state) =>
    content.selectors.getBotProfits(state)
  );
  const botLoading = useSelector((state) =>
    content.selectors.getBotLoading(state)
  );
  const botError = useSelector((state) => content.selectors.getBotError(state));
  const dispatch = useDispatch();
  console.log(botProfits);
  const average =
    botProfits.reduce((a, b) => a + b.profit, 0) / botProfits.length;
  console.log(average);
  useEffect(() => {
    dispatch(content.actions.getBotData());
  }, [dispatch]);
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
            {!botError && !botLoading && (
              <BotInfoDetailsRevenue>
                Bots Total Revenue: {average} &euro;
              </BotInfoDetailsRevenue>
            )}
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
