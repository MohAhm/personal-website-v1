import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFF;
    --color--primary: #7E41FF;
    --color--headings: var(--white);
    --color--text: #ADAFBA;
    --color--link: #B393D7;
    --color--background: #1D1F26;
    --transition: all 0.3s ease-in-out;
    --border--radius: 40px;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    font-size: 1.8rem;
    color: var(--color--text);
    background: var(--color--background);
  }

  img {
    width: 100%;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  ::selection {
    color: var(--white);
    background: var(--color--primary);
  }
`

export default GlobalStyles