import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
//Global styles
import GlobalStyle from "./GlobalStyles";
//Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Bots from "./pages/Bots";
import Coins from "./pages/Coins";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [coinDataState, setCoinDataState] = useState(0);

  // useEffect(() => {
  //   const socket = io("http://localhost:3000");
  //   socket.on("connect", () => {
  //     console.log("YAY you connected");
  //   });
  //   socket.on("receive-coinData", (coinData) => {
  //     console.log(coinData);
  //     setCoinDataState(coinData);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/bots" element={<Bots />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
