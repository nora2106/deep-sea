import styled from 'styled-components';
import Zoom from "@mui/material/Zoom";
import Bubble from "./Bubble";

const Wrapper = styled('div')`
  position: relative;
  width: fit-content;
  z-index: 3;

  #bubble2 {
    float: right;
  }
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

