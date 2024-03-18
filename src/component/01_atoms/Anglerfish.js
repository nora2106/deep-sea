import styled from 'styled-components';

const Container = styled('div')`
  --body-color: #1F2B6D;
  --tooth-color: #E8E9D8;
  --fin-light: #231956;
  --fin-dark: #220737;
  --eye-color: #220737;
  --lightbulb-color: #FBCA23;
  --lightbulb-dark: #F5890B;
  z-index: 3;
  transform: scale(.7);
  padding-block: 1em;
  margin-left: -20%;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: 0;
    padding-block: 2em;
    transform: scale(.9);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    transform: scale(1);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    transform: scale(1.1);
  }

  .anglerfish {
    display: inline-grid;
    grid-template-columns: 6em 6em 6em 6em 6em;
    grid-template-rows: 4em 10em;
    grid-template-areas:
    'top-front top-front top top top'
    'front body-1 body-2 body-3 body-4';
    animation: move 3.5s ease-in-out forwards;

    .head {
      width: 10em;
      height: 10em;
      border-radius: 100%;
      grid-area: body-1;
      overflow: hidden;
      background-color: var(--body-color);
      clip-path: polygon(99.73% 0%, 100% 100%, 0% 100%, 0% 67.01%, 53.08% 67.01%, 49.86% 50%, 40.44% 34.3%, 24.71% 24.91%, 0% 21.75%, 0% 0%);
      z-index: 2;
    }

    .lip {
      position: absolute;
      grid-area: body-1;
      width: 4em;
      height: 15px;
      border-radius: 20px;
      background-color: var(--body-color);
      margin-left: .5em;
      margin-top: 1.4em;
      z-index: 3;

      &.lip-bottom {
        margin-top: 6em;
        margin-left: -0.5em;
        width: 6em;
      }
    }

    .mouth {
      position: absolute;
      grid-area: body-1;
      width: 10em;
      height: 10em;
      border-radius: 100%;
      z-index: 0;
      clip-path: polygon(0% 67.01%, 53.08% 67.01%, 49.86% 50%, 40.44% 34.3%, 24.71% 24.91%, 0% 21.75%);
      overflow: hidden;
    }

    .bottom {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-top: 40%;
    }

    .top {
      display: flex;
      flex-direction: row;
      width: 100%;
      transform: scaleY(-.75) scaleX(.75) rotate(-40deg);
      margin-top: 25%;
      margin-left: -5%;
      position: absolute;
    }

    .tooth {
      clip-path: polygon(26.5% 100%, 79.89% 100%, 82.44% 72.05%, 74.52% 45.62%, 57.45% 23.94%, 26.5% 0%, 37.25% 34.25%, 37.25% 60%);
      background-color: var(--tooth-color);
      z-index: 2;
      width: 2em;
      height: 3.5em;
      position: relative;
      transform: scaleX(-1);

      &.tooth-1 {
        transform: scaleX(-110%) scaleY(120%) rotate(20deg);
        margin-left: -5px;
      }

      &.tooth-2 {
        margin-left: -10px;
        transform: scaleX(-100%) scaleY(105%) rotate(10deg);
        margin-top: 5%;
      }

      &.tooth-3 {
        margin-left: -13px;
        transform: scaleX(-90%) scaleY(90%) rotate(5deg);
        margin-top: 5%;
      }

      &.tooth-4 {
        margin-left: -13px;
        transform: scaleX(-80%) scaleY(80%) rotate(8deg);
        margin-top: 5%;
      }
    }

    .eye {
      width: 1.6em;
      height: 1.6em;
      background-color: var(--eye-color);
      z-index: 3;
      position: relative;
      top: 12%;
      left: 48%;
      border-radius: 100%;

      &:after {
        content: '';
        margin-left: 50%;
        width: 7px;
        height: 7px;
        z-index: 4;
        display: block;
        border-radius: 100%;
      }
    }

    .fin {
      border-bottom: 2.5em solid var(--fin-light);
      border-left: .8em solid transparent;
      border-right: .8em solid transparent;
      transform: rotate(-90deg);
      height: 0;
      width: 1em;
      margin-left: 55%;
      margin-top: 25%;
      z-index: 3;

      &:before {
        content: '';
        background-color: var(--body-color);
        border-radius: 0 0 6em 6em;
        width: 2.2em;
        margin-left: -10px;
        height: 15px;
        display: block;
      }
    }

    .fin-end {
      width: .4em;
      height: 2.6em;
      background-color: var(--fin-light);
      border-radius: 0 4em 4em 0;
      z-index: 2;
      margin-left: 80%;
      margin-top: -26%;
      border-right: 1em solid var(--fin-dark);

      &:after {
        content: '';
        border-bottom: 0 solid transparent;
        border-right: 8px solid var(--fin-dark);
        border-top: 8px solid transparent;
        z-index: 2;
      }

      &:before {
        content: '';
        margin-left: 6px;
        border-bottom: 0 solid transparent;
        border-right: 8px solid var(--fin-dark);
        border-top: 8px solid transparent;
        z-index: 2;
      }
    }


    .tail {
      background-color: var(--body-color);
      width: 10em;
      height: 2.5em;
      margin-left: -15%;
      border-top-right-radius: 14px;
      border-bottom-right-radius: 14px;
      grid-area: body-2;
      z-index: 1;

      &:after {
        content: '';
        display: block;
        height: 2.1em;
        width: 4em;
        margin-left: 35%;
        background-color: var(--body-color);
        border-radius: 40px;
        transform: rotate(-30deg);
        z-index: 1;
      }

      .dots {
        display: flex;
        flex-direction: row;
        margin-left: 35%;
        margin-top: 5px;
        height: fit-content;
        align-items: flex-end;
        z-index: 3;
        position: relative;
      }

      .dot {
        width: 8px;
        height: 20px;
        background-color: var(--lightbulb-color);
        margin: 4px;
        border-radius: 100%;

        &:nth-child(2) {
          height: 18px;
        }

        &:nth-child(3) {
          height: 16px;
        }

        &:nth-child(4) {
          height: 14px;
        }

        &:nth-child(5) {
          height: 13px;
        }

        &:nth-child(6) {
          height: 12px;
        }
      }
    }

    .top-fin {
      border-radius: 0 6em 6em 0;
      height: 5em;
      width: 5.5em;
      grid-area: top;
      margin-top: 12%;
      margin-left: 5%;
      background-color: var(--fin-light);

      .stripes {
        display: flex;
        width: 100%;
        height: 3em;
        margin-top: -10%;
        margin-left: 10%;
      }

      .stripe {
        height: 3em;
        width: 3px;
        border-radius: 15px;
        background-color: var(--fin-dark);
        margin: 0 6px;
        z-index: 1;

        &:nth-child(2) {
          transform: scaleY(.9);
        }

        &:nth-child(3) {
          transform: scaleY(.8);
        }

        &:nth-child(4) {
          transform: scaleY(.7);
        }

        &:nth-child(5) {
          transform: scaleY(.6);
        }
      }

      &:after {
        content: '';
        position: relative;
        margin-left: 1em;
        top: -3.5em;
        border-bottom: 0 solid transparent;
        border-left: 15px solid var(--fin-light);
        border-top: 15px solid transparent;
        z-index: 0;
      }

      &:before {
        content: '';
        border-bottom: 0 solid transparent;
        border-left: 15px solid var(--fin-light);
        border-top: 15px solid transparent;
      }
    }

    .tail-fin {
      border-bottom: 4em solid var(--fin-light);
      border-left: 1.8em solid transparent;
      border-right: 1.8em solid transparent;
      transform: rotate(-90deg);
      height: 0;
      width: 2em;
      grid-area: body-3;
      margin-left: 30%;
      margin-top: -10px;
      z-index: 0;
    }

    .tail-fin-end {
      width: .6em;
      height: 5em;
      background-color: var(--fin-light);
      border-radius: 0 4em 4em 0;
      grid-area: body-4;
      margin-top: -15%;
      margin-left: 5px;
      border-right: 1.5em solid var(--fin-dark);

      &:after {
        content: '';
        border-bottom: 0 solid transparent;
        border-right: 8px solid var(--fin-dark);
        border-top: 10px solid transparent;
      }

      &:before {
        content: '';
        margin-left: 8px;
        border-bottom: 0 solid transparent;
        border-right: 8px solid var(--fin-dark);
        border-top: 10px solid transparent;
      }
    }

    .light {
      width: 7em;
      height: 8em;
      border-top: .8em solid var(--fin-light);
      border-left: .8em solid var(--fin-light);
      border-right: .8em solid var(--fin-light);
      border-top-right-radius: 35px;
      border-top-left-radius: 60px;
      grid-area: top-front;
      clip-path: polygon(0% 0%, 100% 0%, 100% 61%, 59.79% 61%, 59.79% 88.5%, 0% 88.5%);
      margin-left: 10%;
      animation: sway 3s ease-in forwards;
    }

    .lightbulb {
      height: 2.5em;
      width: 2em;
      background-color: var(--lightbulb-color);
      border-radius: 100%;
      grid-area: front;
      margin-top: 45%;
      margin-left: 5%;
      z-index: 3;
      border: 6px solid var(--lightbulb-dark);
      animation: swayLight 3s ease-in forwards;

      &:after {
        content: '';
        background-color: white;
        height: 1em;
        width: 1em;
        display: block;
        border-radius: 100%;
        margin: 0 auto;
        position: relative;
        top: 50%;
      }
    }
  }

  @keyframes sway {
    0% {
      transform: rotate(10deg) translateY(-10px);
    }
    100% {
      transform: rotate(-10deg) translateY(10px);
    }
  }

  @keyframes swayLight {
    0% {
      transform: translateX(-10px) translateY(-6px) rotate(15deg);
    }
    60% {
      transform: translateX(-5px) translateY(5px) rotate(10deg);
    }
    100% {
      transform: translateX(10px) translateY(10px) rotate(-15deg);
    }
  }

  @keyframes move {
    0% {
      transform: rotate(10deg) translateX(-50%) scale(-1.1, 1.1);
    }

    100% {
      transform: rotate(-10deg) translateX(0) scale(-1.1, 1.1);
    }
  }
`;

function Name() {
    return (
        <Container>
                <div className="anglerfish">
                    <div className="light"/>
                    <div className="top-fin">
                        <div className="stripes">
                            <div className="stripe"/>
                            <div className="stripe"/>
                            <div className="stripe"/>
                            <div className="stripe"/>
                        </div>
                    </div>
                    <div className="head">
                        <div className="eye"/>
                        <div className="fin"/>
                        <div className="fin-end"/>
                    </div>
                    <div className="lip"/>
                    <div className="lip lip-bottom"/>
                    <div className="mouth">
                        <div className="top">
                            <div className="tooth tooth-1"/>
                            <div className="tooth tooth-2"/>
                            <div className="tooth tooth-3"/>
                            <div className="tooth tooth-4"/>
                        </div>
                        <div className="bottom">
                            <div className="tooth tooth-1"/>
                            <div className="tooth tooth-2"/>
                            <div className="tooth tooth-3"/>
                            <div className="tooth tooth-4"/>
                        </div>
                    </div>
                    <div className="tail">
                        <div className="dots">
                            <div className="dot"/>
                            <div className="dot"/>
                            <div className="dot"/>
                            <div className="dot"/>
                            <div className="dot"/>
                            <div className="dot"/>
                        </div>
                    </div>
                    <div className="tail-fin"/>
                    <div className="tail-fin-end"/>
                    <div onClick={() => localStorage.setItem('flashlight', 'on')} className="lightbulb" id="lightbulb"/>
                </div>
        </Container>
    );
}

export default Name;

