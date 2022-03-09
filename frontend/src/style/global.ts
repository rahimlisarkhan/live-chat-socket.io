import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family:'Open Sans', sans-serif;
        background-color:${colors.colorBlue} ;
    }
`;
export default GlobalStyle