import styled from 'styled-components';

const Button = styled('div')`
  background-color: transparent;
  right: 0;
  top: 0;
  z-index: 6;
  width: 35px;
  height: 20px;
  transform: rotate(0deg);
  margin: 1em;
  position: fixed;
  
  &.menu-open {
    .line-1 {
      transform: rotate(45deg) translate(5px, -5px);
    }
    .line-2 {
      transform: translateX(-35%);
      opacity: 0;
      transition: transform .4s, opacity .8s ease-out;
    }
    .line-3 {
      transform: rotate(-45deg) translate(20px, -10px);
      top: 0;
    }
  }
`;

const Line = styled('span')`
  margin: 6px 0;
  display: block;
  position: relative;
  height: 4px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transition: 1s ease-in-out;
`;


function MenuButton(props) {

    return (
        <Button onClick={props.action} className={props.open === true ? ` menu-open` : ` `}>
            <Line className='line-1'/>
            <Line className='line-2'/>
            <Line className='line-3'/>
        </Button>
    );
}


export default MenuButton;

