// instruments
import { createGlobalStyle } from 'styled-components';
// fonts
import GothicFontTTF from './fonts/gothic.ttf';
import GothicFontOTF from './fonts/gothic.otf';
import GothicFontSVG from './fonts/gothic.svg';
import GothicFontEOT from './fonts/gothic.eot';
import GothicFontWOFF from './fonts/gothic.woff';

export const GlobalStyle = createGlobalStyle`
  #main {
    // width
    --main-width: calc(350px + (450 - 350) * (100vw - 400px) / (1920 - 400));
    // color background
    --color-bg-default: #fff;
    --color-bg-button: #000;
    --color-bg-error: #ff0a0a;
    --color-bg-main: #292929cc;
    --color-bg-ghost: #ffffff40;
    --color-bg-brown: #deab87;
    // color typography
    --color-typo-default: #ffffff;
    --color-typo-normal: #292929;
    --color-typo-ghost: #b0b0b0;
    --color-typo-browm: #deab87;
    --color-typo-button: #e0e0e0;
    // border-radius
    --radius-s: 4px;
    --radius-m: 8px;
    --radius-l: 12px;
    --radius-xl: 16px;
    --radius-xxl: 20px;
    // font-size
    --main-fz: calc(14px + (18 - 14) * ((100vw - 400px) / (1920 - 400)));
    --mini-fz: calc(10px + (14 - 10) * ((100vw - 400px) / (1920 - 400)));
    --title-fz: calc(20px + (30 - 20) * ((100vw - 400px) / (1920 - 400)));
    --subtitle-fz: calc(20px + (15 - 20) * ((100vw - 400px) / (1920 - 400)));
    // padding
    --padding-s: calc(4px + (8 - 4) * ((100vw - 400px) / (1920 - 400)));
    --padding-m: calc(6px + (12 - 6) * ((100vw - 400px) / (1920 - 400)));
    --padding-l: calc(10px + (18 - 10) * ((100vw - 400px) / (1920 - 400)));
    --padding-xl: calc(12px + (26 - 12) * ((100vw - 400px) / (1920 - 400)));
    // margin 
    --margin-s: calc(4px + (8 - 4) * ((100vw - 400px) / (1920 - 400)));
    --margin-m: calc(6px + (12 - 6) * ((100vw - 400px) / (1920 - 400)));
    --margin-l: calc(10px + (18 - 10) * ((100vw - 400px) / (1920 - 400)));
    --margin-xl: calc(12px + (26 - 12) * ((100vw - 400px) / (1920 - 400)));
    // box-shadow
    --shadow-normal: 0 0 15px var(--color-bg-button);
    // width & height button
    --width-button: calc(120px + (160 - 120) * ((100vw - 400px) / (1920 - 400)));
    --height-button: calc(25px + (35 - 25) * (100vw - 400px) / (1920 - 400));
    --width-input: calc(200px + (250 - 200) * ((100vw - 400px) / (1920 - 400)));
    --height-input: calc(15px + (25 - 15) * (100vw - 400px) / (1920 - 400));
  }
  @font-face {
    font-family: 'Gothic';
    src: local('Gothic'),
    url(${GothicFontTTF}) format('ttf'),
    url(${GothicFontOTF}) format('otf'),
    url(${GothicFontSVG}) format('svg'),
    url(${GothicFontEOT}) format('eot'),
    url(${GothicFontWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
