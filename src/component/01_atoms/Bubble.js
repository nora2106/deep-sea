import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled('div')`
    position: relative;
`;

const Card = styled('div')`
  background-color: white;
  border-radius: 100%;
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  .icon {
    width: 20%;
    height: 20%;
  }
  
  h3{
    font-size: 18px;
    font-weight: 500;
  }
`;

const Button = styled('button')`
  position: relative;
  height: 25px;
  width: 85px;
  border-radius: 10px;
  outline: none;

  .icon-btn {
    width: 40%;
  }
`;

const Outline = styled('div')`
    width: 250px;
  height: 250px;
  position: absolute;
  border-radius: 100%;
  outline: 2px dotted white;
`;


function Bubble(props) {
    return (
        <Container>
            <Outline/>
            <Card>
                    <FontAwesomeIcon className="icon" icon={props.icon}/>
                <h3>{props.text}</h3>
                <Button>View
                    <FontAwesomeIcon className="icon-btn" icon='arrow-right'/>
                </Button>
            </Card>
        </Container>
    );
}

export default Bubble;

