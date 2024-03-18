import styled from 'styled-components';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import {useEffect} from "react";

const Container = styled('div')`
  max-width: 12em;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  display: none;
  opacity: 0;
  animation: textIn 1s ease-in forwards;
  animation-delay: 3000ms;
  
  svg {
    color: white;
    transform: rotate(180deg) scale(1.4);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    display: flex;
  }
`;

const Text = styled('p')`
    color: white;
  font-size: 1.2rem;
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
            <Text>Click here for a flashlight</Text>
        </Container>
    );
}

export default Name;

