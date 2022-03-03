import { createGlobalStyle } from "styled-components";
//Image
import { backgroundImage } from "./images";
const GlobalStyle = createGlobalStyle`
:root{
    --black: #000;
    --white: #fff;
    --pink: #F72585;
    --blue: #4CC9F0;
    --purple: #7209B7;
    --width: 160rem;
    --yellow: #F7CE00;
    --blue1: #0058B5;
}
*,
*::after,
*::before{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    }
html{
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: 'Smooch Sans', sans-serif;
}
body{
    background-color: var(--black);
    background-image: url(${backgroundImage});
    background-size: 120vw 150vh;
    background-repeat: no-repeat;
    background-position: 5rem 5rem;
}
`;
export default GlobalStyle;
