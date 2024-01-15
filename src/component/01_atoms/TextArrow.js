import styled from 'styled-components';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import {useEffect} from "react";

const Container = styled('div')`
  position: absolute;
  top: 25%;
  max-width: 12em;
  flex-direction: row;
  align-items: center;
  right: 16%;
  gap: 1em;
  display: none;
  
  svg {
    color: white;
    transform: rotate(180deg) scale(1.4);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: flex;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    right: 18%;
  }
`;

const Text = styled('p')`
    color: white;
  font-size: 1.5rem;
`;

function Name(props) {
    useEffect(() => {
        if(props.show === true) {
            document.querySelector('.flashlight-text').style.display = 'none';
        }
    }, [props.show]);
    return (
        <Container className='flashlight-text'>
            <ArrowRightAlt/>
            <Text>Click here for flashlight</Text>
        </Container>
    );
}

export default Name;

