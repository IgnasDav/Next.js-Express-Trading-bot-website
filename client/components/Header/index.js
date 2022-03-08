import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
//Styles
import { Wrapper, Nav, Logo, Content } from "./Header.styles";
//Logo
import LogoImg from "../../public/images/Logo.png";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Image src={LogoImg} alt="Logo image" />
        </Logo>
        <Nav>
          <ul>
            <Link href={"/"}>
              <li>
                <span>
                  <p>Home</p>
                </span>
              </li>
            </Link>
            <Link href={"/coins"}>
              <li>
                <span>
                  <p>Coins</p>
                </span>
              </li>
            </Link>
            <Link href={"/bots"}>
              <li>
                <span>
                  <p>Bots</p>
                </span>
              </li>
            </Link>
            <Link href={"/contact"}>
              <li>
                <span>
                  <p>Contact Us</p>
                </span>
              </li>
            </Link>
            <Link href={"/about-us"}>
              <li>
                <span>
                  <p>About Us</p>
                </span>
              </li>
            </Link>
            <li className="moon">
              <FontAwesomeIcon icon={faMoon} className="icon" />
            </li>
          </ul>
        </Nav>
      </Content>
    </Wrapper>
  );
};

export default Header;
