import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    :root {
        --bg: #fff;
        --fg: navy;

        --headingcolor: #6767b3;

        --primary-button-bgcolor: #f26828;
        --primary-button-hovercolor: #f69f77;
        --primary-button-textcolor: #efebeb;

        --secondary-button-bgcolor: #121212;
        --secondary-button-hovercolor: #6a6666;
        --secondary-button-textcolor: #ffffff;
    }

    [data-theme="dark"] {
        --bg: #442e1a;
        --fg: #fff;

        --headingcolor: #eded1b;

        --primary-button-bgcolor: #F59E0B;
        --primary-button-hovercolor: #f1af3d;
        --primary-button-textcolor: #121212;

        --secondary-button-bgcolor: #ffffff;
        --secondary-button-hovercolor: #fafafa;
        --secondary-button-textcolor: #121212;
    }

    [data-theme='dark'] [data-hide-on-theme='dark'],
    [data-theme='light'] [data-hide-on-theme='light'] {
        display: none;
    }
`

export default GlobalStyle;