import { BTCGraph, BTCLogo } from "../../images";
//Components
import Button from "../Button";
//Styles
import {
  Wrapper,
  Content,
  CoinInfoGrid,
  Title,
  CoinInfoDetails,
  Logo,
  LogoPic,
  LogoTitle,
  Price,
  Graph,
} from "./CoinInfo.style";

const CoinInfo = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Coins</Title>
        <CoinInfoGrid>
          <CoinInfoDetails>
            <Logo>
              <LogoPic src={BTCLogo} />
              <LogoTitle>BTC</LogoTitle>
            </Logo>
            <Price>30000$</Price>
            <Graph>
              <img src={BTCGraph} alt="graph" />
            </Graph>
          </CoinInfoDetails>
          <CoinInfoDetails>
            <Logo>
              <LogoPic src={BTCLogo} />
              <LogoTitle>BTC</LogoTitle>
            </Logo>
            <Price>30000$</Price>
            <Graph>
              <img src={BTCGraph} alt="graph" />
            </Graph>
          </CoinInfoDetails>
          <CoinInfoDetails>
            <Logo>
              <LogoPic src={BTCLogo} />
              <LogoTitle>BTC</LogoTitle>
            </Logo>
            <Price>30000$</Price>
            <Graph>
              <img src={BTCGraph} alt="graph" />
            </Graph>
          </CoinInfoDetails>
          <CoinInfoDetails>
            <Logo>
              <LogoPic src={BTCLogo} />
              <LogoTitle>BTC</LogoTitle>
            </Logo>
            <Price>30000$</Price>
            <Graph>
              <img src={BTCGraph} alt="graph" />
            </Graph>
          </CoinInfoDetails>
        </CoinInfoGrid>
        <Button text="Coin Info" color="#F72585" className="g-end" />
      </Content>
    </Wrapper>
  );
};

export default CoinInfo;
