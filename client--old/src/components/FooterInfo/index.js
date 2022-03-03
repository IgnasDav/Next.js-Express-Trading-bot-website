import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LogoImg from "../../images/Logo.png";
//Component
import Button from "../Button";
//styles
import {
  Wrapper,
  Content,
  Form,
  Sitemap,
  SitemapNav,
  Logo,
  Info,
  InfoDiv,
} from "./FooterInfo.style";

const FooterInfo = () => {
  return (
    <Wrapper>
      <Content>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h3>Contact Us</h3>
          <p>Send us a message</p>
          <input type="text" placeholder="Input your name" required />
          <input type="text" placeholder="Input your last name" required />
          <textarea placeholder="Write us a message" required></textarea>
          <Button
            text={"sumbit"}
            color="#fff"
            square
            className={"form-btn"}
            type="submit"
          />
        </Form>
        <Sitemap>
          <h3>Sitemap</h3>
          <SitemapNav>
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
                  <p>Contact</p>
                </span>
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li>
                <span>
                  <p>About us</p>
                </span>
              </li>
            </Link>
          </SitemapNav>
        </Sitemap>
        <InfoDiv>
          <Logo src={LogoImg} />
          <Info>
            <a href="tel:+37060000000">
              <span>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  +37060000000
                </p>
              </span>
            </a>
            <a href="mailto:ignas321@gmail.com">
              <span>
                <p>
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                  email@email.com
                </p>
              </span>
            </a>
          </Info>
        </InfoDiv>
      </Content>
    </Wrapper>
  );
};

export default FooterInfo;
