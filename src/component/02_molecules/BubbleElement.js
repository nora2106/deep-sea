import styled from 'styled-components';
import Zoom from "@mui/material/Zoom";
import Bubble from "./Bubble";
import BubbleOutline from "../01_atoms/BubbleOutline";
import SliderItem from "../01_atoms/SliderItem";

const Wrapper = styled('div')`
  position: relative;
  width: fit-content;
  z-index: 3;

  #bubble2 {
    float: right;
  }
`;

const Test = styled('div')`
  position: relative;
`;

function BubbleElement(props) {
    return (
        <Zoom in={props.show} style={{transitionDuration: '1000ms'}}>
            <Wrapper className='show-scroll' id={props.id}>
                <div className='btn-hover'>
                    <Bubble link={props.link} text={props.text} img={props.img}/>
                </div>
            </Wrapper>
        </Zoom>
    );
}

export default BubbleElement;

