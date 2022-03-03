import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
//Styles
import { Arrow, Wrapper } from "./Button.styles";

const Button = ({
  color = "white",
  text,
  className,
  square,
  type = "button",
}) => {
  return (
    <Wrapper color={color} className={className} type={type}>
      <p>{text}</p>
      {!square && (
        <Arrow>
          <FontAwesomeIcon icon={faChevronRight} className="arrow" />
        </Arrow>
      )}
    </Wrapper>
  );
};

export default Button;
