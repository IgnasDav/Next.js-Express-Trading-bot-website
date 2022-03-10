import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import content from "../../content";
import Router from "next/router";
//Pages
import {
  BTCGraph,
  BTCLogo,
  ADALogo,
  ETHLogo,
  USDTLogo,
} from "../../public/images";
//Components
import Button from "../Button";
import CoinLineChart from "../Chart";
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
  GraphInfo,
} from "./CoinInfo.style";

const CoinInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(content.actions.getBTCPrice());
  }, []);
  useEffect(() => {
    dispatch(content.actions.getETHPrice());
  }, []);
  useEffect(() => {
    dispatch(content.actions.getADAPrice());
  }, []);
  useEffect(() => {
    dispatch(content.actions.getUSDTPrice());
  }, []);
  useEffect(() => {
    dispatch(content.actions.getCoinData());
  }, []);

  const BTCPrice = useSelector((state) => content.selectors.getBTCPrice(state));
  const ETHPrice = useSelector((state) => content.selectors.getETHPrice(state));
  const ADAPrice = useSelector((state) => content.selectors.getADAPrice(state));
  const USDTPrice = useSelector((state) =>
    content.selectors.getUSDTPrice(state)
  );
  const BTCData = useSelector((state) => content.selectors.getBTCData(state));
  const ADAData = useSelector((state) => content.selectors.getADAData(state));
  const ETHData = useSelector((state) => content.selectors.getETHData(state));
  const USDTData = useSelector((state) => content.selectors.getUSDTData(state));

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
            <Price>{BTCPrice} &euro;</Price>
            <Graph>
              <CoinLineChart
                data={BTCData}
                stroke="#F72585"
                width={100}
                height={100}
                dataKey={"coinData"}
              />
              <div className="graphInfo">BTC Price Graph</div>
            </Graph>
          </CoinInfoDetails>
          <CoinInfoDetails>
            <Logo>
              <LogoPic src={ETHLogo} />
              <LogoTitle>ETH</LogoTitle>
            </Logo>
            <Price>{ETHPrice} &euro;</Price>
            <Graph>
              <CoinLineChart
                data={ETHData}
                stroke="#F72585"
                width={100}
                height={100}
                dataKey={"coinData"}
              />
              <div className="graphInfo">ETH Price Graph</div>
            </Graph>
          </CoinInfoDetails>
          <CoinInfoDetails>
            <Logo>
              <LogoPic src={ADALogo} />
              <LogoTitle>ADA</LogoTitle>
            </Logo>
            <Price>{ADAPrice} &euro;</Price>
            <Graph>
              <CoinLineChart
                data={ADAData}
                stroke="#F72585"
                width={100}
                height={100}
                dataKey={"coinData"}
              />
              <div className="graphInfo">ADA Price Graph</div>
            </Graph>
          </CoinInfoDetails>
          <CoinInfoDetails>
            <Logo>
              <LogoPic src={USDTLogo} />
              <LogoTitle>USDT</LogoTitle>
            </Logo>
            <Price>{USDTPrice} &euro;</Price>
            <Graph>
              <CoinLineChart
                data={USDTData}
                stroke="#F72585"
                width={100}
                height={100}
                dataKey={"coinData"}
              />
              <div className="graphInfo">USDT Price Graph</div>
            </Graph>
          </CoinInfoDetails>
        </CoinInfoGrid>
        <Button
          text="Coin Info"
          color="#F72585"
          className="g-end"
          onClick={() => {
            Router.push("/coins");
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default CoinInfo;
