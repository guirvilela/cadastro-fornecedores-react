import { createGlobalStyle } from "styled-components";
import theme from "../theme";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1200px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.5%
    }
}

body {
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.background};
    margin: 0 auto;
    min-height: 100vh;

}

body, input, text-area, a,  button {
    font: ${theme.fonts.poppins.regular_400};
    border: 0;
    color: ${() => theme.colors.text_primary}
}

button, a {
    cursor: pointer;
    border:0;
    background-color: transparent;
}



::-webkit-scrollbar {
    border-radius: 5px;
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: ${() => theme.colors.blue_medium};
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background-color: ${() => theme.colors.gray_border} ;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
