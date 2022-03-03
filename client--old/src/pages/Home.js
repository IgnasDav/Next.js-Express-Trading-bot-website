import About from "../components/About";
import BotInfo from "../components/BotInfo";
import CoinInfo from "../components/CoinInfo";
import FooterInfo from "../components/FooterInfo";
import Karabil from "../components/Karabil";
import WhyUse from "../components/WhyUse";
const Home = () => {
  return (
    <div>
      <Karabil />
      <About />
      <WhyUse />
      <CoinInfo />
      <BotInfo />
      <FooterInfo />
    </div>
  );
};
export default Home;
