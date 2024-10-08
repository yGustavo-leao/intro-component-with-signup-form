import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        background-image: url(${process.env.PUBLIC_URL}/assets/images/bg-intro-mobile.png);
        background-color: ${({theme}) => theme.colors.red};

        @media (min-width: 1000px) {
            padding: 0 2rem;
        }

        @media (min-width: 1200px) {
            background-image: url(${process.env.PUBLIC_URL}/assets/images/bg-intro-desktop.png);
            padding: 0 5rem;
        }

        @media (min-width: 1400px) {
            padding: 0 10rem;
        }
    }
`