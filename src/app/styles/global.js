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
    // resolution
    --res: (100vw - 400px) / (1920 - 400);
    // width
    --main-width: calc(300px + (450 - 300) * var(--res));
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
    --color-typo-game: #623D29;
    // border-radius
    --radius-s: 4px;
    --radius-m: 8px;
    --radius-l: 12px;
    --radius-xl: 16px;
    --radius-xxl: 20px;
    // font-size
    --main-fz: calc(14px + (18 - 14) * --res);
    --mini-fz: calc(10px + (14 - 10) * var(--res));
    --title-fz: calc(20px + (30 - 20) * var(--res));
    --subtitle-fz: calc(20px + (15 - 20) * var(--res));
    // padding
    --padding-s: calc(4px + (8 - 4) * var(--res));
    --padding-m: calc(6px + (12 - 6) * var(--res));
    --padding-l: calc(10px + (18 - 10) * var(--res));
    --padding-xl: calc(12px + (26 - 12) * var(--res));
    // margin 
    --margin-s: calc(4px + (8 - 4) * var(--res));
    --margin-m: calc(6px + (12 - 6) * var(--res));
    --margin-l: calc(10px + (18 - 10) * var(--res));
    --margin-xl: calc(12px + (26 - 12) * var(--res));
    // box-shadow
    --shadow-normal: 0 0 15px var(--color-bg-button);
    // width & height button
    --width-button: calc(120px + (160 - 120) * var(--res));
    --height-button: calc(25px + (35 - 25) * var(--res));
    // width & height input
    --width-input: calc(200px + (250 - 200) * var(--res));
    --height-input: calc(15px + (25 - 15) * var(--res));
    // width/height/padding/margin card
    --width-card: calc(270px + (370 - 270) * var(--res));
    --height-card: calc(120px + (220 - 120) * var(--res));
    --height-card-item: calc(60px + (100 - 60) * var(--res));
    --padding-min-card: calc(30px + (60 - 30) * var(--res));
    --padding-max-card: calc(60px + (100 - 60) * var(--res));
    --grid-gap: calc(50px + (110 - 50) * var(--res));

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
