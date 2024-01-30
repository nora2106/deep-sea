import styled from 'styled-components';
import Search from "../01_atoms/Search";
import Logo from "../01_atoms/Logo";
import MenuList from "../01_atoms/MenuList";
import {useEffect, useState} from "react";
import MenuButton from "../01_atoms/MenuButton";

const Container = styled('div')`
  height: 20em;
  width: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.colors.bgDarker};
  top: 0;

  &.show {
    .mobile-menu__open {
      animation: showMenu 1s ease-in forwards;
      animation-delay: 1s;
      pointer-events: all;
    }

    .growing-blob {
      path {
        animation: blob 2.5s ease-out forwards;
      }
      top: 12em;
      right: 3em;
      transform: scale(5);

      @media(min-width: ${(props) => props.theme.breakpoints.xs}) {
        transform: scale(7);
        right: 4em;
        top: 16em;
      }

      @media(min-width: ${(props) => props.theme.breakpoints.s}) {
        transform: scale(8);
        right: 10em;
        top: 18em;
      }
    }

    .menu-overlay {
      opacity: .6;
    }
  }

  &.hidden {
    .mobile-menu__open {
      animation: hideMenu .8s ease-out forwards;
    }

    .menu-overlay {
      opacity: 0;
    }

    .growing-blob {
      path {
        animation: deblob 2.5s ease-in forwards;
      }
      transform: scale(1);
      top: -20px;
      right: -25px;
    }
  }
`;

const Blob = styled('svg')`
  top: -20px;
  right: -25px;
  position: fixed;
  z-index: 4;
  transition: top 2.5s, transform 2.5s, right 2.5s;
  width: 8em;
  height: auto;

  @keyframes blob {
    0% {
      d: path("M434.5,289Q443,338,400,362.5Q357,387,324.5,427.5Q292,468,247.5,435Q203,402,156.5,402.5Q110,403,76.5,369Q43,335,29,287.5Q15,240,48,201.5Q81,163,104.5,131.5Q128,100,158.5,57.5Q189,15,233.5,45Q278,75,318,83.5Q358,92,395,119.5Q432,147,429,193.5Q426,240,434.5,289Z")
    }
    25% {
      d: path("M397.5,277.5Q395,315,372.5,346.5Q350,378,316,401Q282,424,235.5,443Q189,462,169.5,407.5Q150,353,99,343Q48,333,69,286.5Q90,240,69,194Q48,148,85,119.5Q122,91,158,65Q194,39,234.5,62Q275,85,322.5,81Q370,77,386,119.5Q402,162,401,201Q400,240,397.5,277.5Z");
    }
    50% {
      d: path("M432,282.5Q417,325,390,360Q363,395,321,402.5Q279,410,237,424Q195,438,145.5,429.5Q96,421,81.5,372Q67,323,75,281.5Q83,240,82.5,202Q82,164,105.5,132.5Q129,101,164,81Q199,61,245,39Q291,17,337.5,38.5Q384,60,416,100Q448,140,447.5,190Q447,240,432,282.5Z");
    }
    75% {
      d: path("M416,276.5Q391,313,390,370Q389,427,333,414Q277,401,234,427.5Q191,454,148.5,431Q106,408,66.5,375.5Q27,343,50,291.5Q73,240,79.5,203Q86,166,99,122.5Q112,79,151,50.5Q190,22,237.5,31.5Q285,41,332.5,52.5Q380,64,376,120.5Q372,177,406.5,208.5Q441,240,416,276.5Z");
    }
    100% {
      d: path("M434,289Q443,338,403,366Q363,394,323.5,412.5Q284,431,239.5,433.5Q195,436,164.5,404.5Q134,373,110,343.5Q86,314,89.5,277Q93,240,84.5,200.5Q76,161,83.5,107.5Q91,54,143.5,50.5Q196,47,243,34Q290,21,333.5,44.5Q377,68,368.5,125Q360,182,392.5,211Q425,240,434,289Z");
    }
  }
  
  @keyframes deblob {
    0% {
      d: path("M434,289Q443,338,403,366Q363,394,323.5,412.5Q284,431,239.5,433.5Q195,436,164.5,404.5Q134,373,110,343.5Q86,314,89.5,277Q93,240,84.5,200.5Q76,161,83.5,107.5Q91,54,143.5,50.5Q196,47,243,34Q290,21,333.5,44.5Q377,68,368.5,125Q360,182,392.5,211Q425,240,434,289Z");
    }
    25% {
      d: path("M416,276.5Q391,313,390,370Q389,427,333,414Q277,401,234,427.5Q191,454,148.5,431Q106,408,66.5,375.5Q27,343,50,291.5Q73,240,79.5,203Q86,166,99,122.5Q112,79,151,50.5Q190,22,237.5,31.5Q285,41,332.5,52.5Q380,64,376,120.5Q372,177,406.5,208.5Q441,240,416,276.5Z");
    }
    50% {
      d: path("M432,282.5Q417,325,390,360Q363,395,321,402.5Q279,410,237,424Q195,438,145.5,429.5Q96,421,81.5,372Q67,323,75,281.5Q83,240,82.5,202Q82,164,105.5,132.5Q129,101,164,81Q199,61,245,39Q291,17,337.5,38.5Q384,60,416,100Q448,140,447.5,190Q447,240,432,282.5Z");
    }
    75% {
      d: path("M397.5,277.5Q395,315,372.5,346.5Q350,378,316,401Q282,424,235.5,443Q189,462,169.5,407.5Q150,353,99,343Q48,333,69,286.5Q90,240,69,194Q48,148,85,119.5Q122,91,158,65Q194,39,234.5,62Q275,85,322.5,81Q370,77,386,119.5Q402,162,401,201Q400,240,397.5,277.5Z");
    }
    100% {
      d: path("M434.5,289Q443,338,400,362.5Q357,387,324.5,427.5Q292,468,247.5,435Q203,402,156.5,402.5Q110,403,76.5,369Q43,335,29,287.5Q15,240,48,201.5Q81,163,104.5,131.5Q128,100,158.5,57.5Q189,15,233.5,45Q278,75,318,83.5Q358,92,395,119.5Q432,147,429,193.5Q426,240,434.5,289Z")
    }
  }
`;

const Overlay = styled('div')`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  position: fixed;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1.2s;
`;

const MainMenu = styled('div')`
  z-index: 5;
  position: fixed;
  top: 0;
  margin-top: 6em;
  column-gap: 30px;
  opacity: 0;
  pointer-events: none;

  .menu-items {
    margin-bottom: 8em;
  }
  
  @keyframes showMenu {
    0% {
      opacity: 0;
      right: -10em;
    }
    100% {
      opacity: 1;
      right: 3em;
    }
  }

  @keyframes hideMenu {
    0% {
      opacity: 1;
      right: 3em;
    }
    
    100% {
      opacity: 0;
      right: -10em;
    }
  }
`;

function Menu(props) {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        let menu = document.querySelector(".mobile-menu");

        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            menu.classList.add("hidden");
            setOpen(false);
        } else {
            menu.classList.add("show");
            menu.classList.remove("hidden");
            setOpen(true);
        }
    }

    return (
        <Container className='mobile-menu'>
            <MenuButton open={open} action={toggleMenu}/>
            <Logo/>
            <Blob className='growing-blob' viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M434.5,289Q443,338,400,362.5Q357,387,324.5,427.5Q292,468,247.5,435Q203,402,156.5,402.5Q110,403,76.5,369Q43,335,29,287.5Q15,240,48,201.5Q81,163,104.5,131.5Q128,100,158.5,57.5Q189,15,233.5,45Q278,75,318,83.5Q358,92,395,119.5Q432,147,429,193.5Q426,240,434.5,289Z"
                    fill="#1F2B6D"/>
            </Blob>
            <Overlay className='menu-overlay'/>
            <MainMenu className="mobile-menu__open">
                <div className='mobile-menu__items'>
                    <MenuList/>
                    <Search/>
                </div>
            </MainMenu>
        </Container>
    );
}

export default Menu;

