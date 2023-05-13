// fonts.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* latin-ext */
@font-face {
  font-family: 'Allura';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Allura Regular'), local('Allura-Regular'), url(https://fonts.gstatic.com/s/allura/v8/9oRPNYsQpS4zjuA_hQgWDto.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {   
  font-family: 'Allura';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Allura Regular'), local('Allura-Regular'), url(https://fonts.gstatic.com/s/allura/v8/9oRPNYsQpS4zjuA_iwgW.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src: local('IBM Plex Mono'), local('IBMPlexMono'), url(https://fonts.gstatic.com/s/ibmplexmono/v5/-F63fjptAgt5VM-kVkqdyU8n1iIq129k.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src: local('IBM Plex Mono'), local('IBMPlexMono'), url(https://fonts.gstatic.com/s/ibmplexmono/v5/-F63fjptAgt5VM-kVkqdyU8n1isq129k.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* vietnamese */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src: local('IBM Plex Mono'), local('IBMPlexMono'), url(https://fonts.gstatic.com/s/ibmplexmono/v5/-F63fjptAgt5VM-kVkqdyU8n1iAq129k.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src: local('IBM Plex Mono'), local('IBMPlexMono'), url(https://fonts.gstatic.com/s/ibmplexmono/v5/-F63fjptAgt5VM-kVkqdyU8n1iEq129k.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src: local('IBM Plex Mono'), local('IBMPlexMono'), url(https://fonts.gstatic.com/s/ibmplexmono/v5/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Passion One';
  font-style: normal;
  font-weight: 400;
  src: local('Passion One Regular'), local('PassionOne-Regular'), url(https://fonts.gstatic.com/s/passionone/v10/PbynFmL8HhTPqbjUzux3JEuf9lvQ6Q.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Passion One';
  font-style: normal;
  font-weight: 400;
  src: local('Passion One Regular'), local('PassionOne-Regular'), url(https://fonts.gstatic.com/s/passionone/v10/PbynFmL8HhTPqbjUzux3JEuR9ls.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

export { GlobalStyle };
