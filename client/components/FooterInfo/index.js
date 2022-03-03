import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <p>Contact</p>
              </span>
            </li>
            <li>
              <span>
                <p>About us</p>
              </span>
            </li>
          </SitemapNav>
        </Sitemap>
        <InfoDiv>
          <Logo src={LogoImg} />
          <img src={LogoImg}></img>
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
