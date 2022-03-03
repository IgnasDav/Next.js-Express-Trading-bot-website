import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Nav, Logo, Content } from "./Header.styles";
//Logo
import LogoImg from "../../images/Logo.png";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo src={LogoImg}></Logo>
        </Link>
        <Nav>
          <ul>
            <Link to={"/"}>
              <li>
                <span>
                  <p>Home</p>
                </span>
              </li>
            </Link>
            <Link to={"/coins"}>
              <li>
                <span>
                  <p>Coins</p>
                </span>
              </li>
            </Link>
            <Link to={"/bots"}>
              <li>
                <span>
                  <p>Bots</p>
                </span>
              </li>
            </Link>
            <Link to={"/contact-us"}>
              <li>
                <span>
                  <p>Contact Us</p>
                </span>
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li>
                <span>
                  <p>About Us</p>
                </span>
              </li>
            </Link>
            <li className="moon">
              <FontAwesomeIcon icon={faMoon} />
            </li>
          </ul>
        </Nav>
      </Content>
    </Wrapper>
  );
};

export default Header;
