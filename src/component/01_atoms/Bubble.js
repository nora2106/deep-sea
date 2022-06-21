import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled('div')`
    position: relative;
  padding-top: 5em;
  
  #discover-bubble {
    float: right;
  }
  
`;

const Card = styled('div')`
  //margin: 10em 2em 0 2em;
  margin: 1em 4em;
  background-color: white;
  border-radius: 100%;
  height: 210px;
  width: 210px;
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
  width: 245px;
  height: 245px;
  margin-right: 10px;
  position: absolute;
  border-radius: 100%;
  outline: 3px dotted white;
`;

const Outline2 = styled(Outline)`
  width: 280px;
  height: 280px;
  margin-left: 10px;
  margin-top: 5px;
`;


function Bubble(props) {
    return (
        <Container >
            <div className="wrapper" id={props.id}>
            <Card>
                    <Outline/>
                    <Outline2/>
                    <FontAwesomeIcon className="icon" icon={props.icon}/>
                <h3>{props.text}</h3>
                <Button>View
                    <FontAwesomeIcon className="icon-btn" icon='arrow-right'/>
                </Button>
            </Card>
            </div>
        </Container>
    );
}

export default Bubble;

