import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
//Styles
import { Wrapper, Nav, Logo, Content } from "./Header.styles";
//Logo
import LogoImg from "../../images/Logo.png";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={LogoImg}></Logo>
        <Nav>
          <ul>
            <li>
              <span>
                <p>Home</p>
              </span>
            </li>
            <li>
              <span>
                <p>Coins</p>
              </span>
            </li>
            <li>
              <span>
                <p>Bots</p>
              </span>
            </li>
            <li>
              <span>
                <p>Contact Us</p>
              </span>
            </li>
            <li>
              <span>
                <p>About Us</p>
              </span>
            </li>
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
