export const colors = {
    bgDarker: '#030C15',
    bgDark: '#0D1D29',
    primAccent: '#29ABAD',
    primAccentHighlight: '#3accce',
    secAccent: '#F75B4B',
    secAccentHighlight: '#ff735c',
    textHighlight: '#787878',
    cardBg: '#FFF',
    pageBg: '#0D1D29',
    textLight: '#FFF',
    textDark: '#000',
}
// call props: ${(props) => props.theme.colors.bgDarker};

export const breakpoints = {
                // mobile <425px
    xs: '425px', //tablet 425-768px
    s: '768px', //tablet: 768-1024px
    m: '1024px', //laptop: 1024-1440px
    l: '1440px', //desktop: 1440-2560px
    xl: '2550px' //4k: >25560px
}

const keyframes = {
    show: `@keyframes show {
    to {
      opacity: 1;
      transform: none;
    }
  }`,
    rotateRight: `@keyframes rotateRight {
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); }
  }`,
    rotateLeft: `@keyframes rotateLeft {
    from{ transform: rotate(360deg); }
    to{ transform: rotate(-360deg); }
  }`,
    slideIn: `@keyframes slideIn {
    to{ transform: translateX(0);
     opacity: 1;}
  }`,
}
//${props => props.theme.animations.show};

export const animations = {
    show: `
    animation: show 500ms ease-out forwards;
    ${keyframes.show}
  `,
    rotateRight: `
    animation: rotateRight 60s infinite linear;
    ${keyframes.rotateRight}
  `,
    rotateLeft: `
    animation: rotateLeft 60s infinite linear;
    ${keyframes.rotateLeft}
  `,
    slideIn: `
    animation: slideIn 600ms ease-out forwards;
    ${keyframes.slideIn}
  `,
}
