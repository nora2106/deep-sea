export const colors = {
    bgDarker: '#020312',
    bgDark: '#08132F',
    primAccent: '#F75B4B',
    primAccentHighlight: '#ff735c',
    secAccent: '#29ABAD',
    secAccentHighlight: '#3accce',
    textHighlight: '#787878',
    cardBg: '#FFF',
    pageBg: '#08132F',
    textLight: '#FFF',
    textDark: '#000',
    lightBlue: '#1F2B6D'
}
// call props: ${(props) => props.theme.colors.bgDarker};

export const breakpoints = {
                // mobile <425px
    s: '425px', //tablet 425-768px
    m: '768px', //tablet: 768-1024px
    l: '1025px', //laptop: 1024-1440px
    xl: '1440px', //desktop: 1440-2560px
    xxl: '2550px' //4k: >25560px
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
