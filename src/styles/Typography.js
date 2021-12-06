import { createGlobalStyle } from "styled-components";

import font_knockout_33 from '../assets/fonts/Knockout-33.otf'
import font_knockout_52 from '../assets/fonts/Knockout-52.otf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format('woff2');
  }

  @font-face {
    font-family: Knockout33;
    font-style: normal;
    font-display: swap;
    src: url(${font_knockout_33}) format("opentype");
  }

  @font-face {
    font-family: Knockout52;
    font-style: normal;
    font-display: swap;
    src: url(${font_knockout_52}) format("opentype");
  }

  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3 {
    font-family: Knockout33, Arial, Helvetica, sans-serif;
    color: var(--color--headings);
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  p {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.8rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3.2rem;
    }
  }

  a {
    text-decoration: none;
    color: var(--color--link);
  }
`

export default Typography