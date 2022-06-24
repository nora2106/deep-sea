import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from '../../assets/dotted-circle2.png';

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
  height: 210px;
  width: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .icon {
    width: 20%;
    height: 20%;
    z-index: 2;
  }
  
  h3{
    font-size: 18px;
    font-weight: 500;
    z-index: 2;
  }
  
  .bubble-bg {
    background-color: white;
    opacity: .6;
    height: 210px;
    width: 210px;
    position: absolute;
    border-radius: 100%;
    z-index: 1;
  }
  
  :hover .bubble-bg {
    opacity: 1;
  }
  
`;

const Button = styled('button')`
  z-index: 2;
  position: relative;
  height: 30px;
  width: 100px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.secAccent};
  color: white;
  border: none;
  font-size: 16px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  text-align: center;
  
  .icon-btn {
    width: 30%;
  }
  
  :hover {
    cursor: pointer;
    transition: transform .3s;
    transform: scale(1.2);
  }
`;

const Outline = styled('img')`
  width: 290px;
  height: 290px;
  margin-right: 10px;
  position: absolute;
  z-index: 1;
`;

const Outline2 = styled(Outline)`
  width: 330px;
  height: 330px;
  margin-left: 10px;
  margin-top: 5px;
  position: absolute;
`;


function Bubble(props) {
    return (
        <Container >

            <div className="wrapper" id={props.id}>
            <Card>
                    <Outline src={circle}/>
                    <Outline2 src={circle}/>
                    <FontAwesomeIcon className="icon" icon={props.icon}/>
                <h3>{props.text}</h3>
                <Button>View
                    <FontAwesomeIcon className="icon-btn" icon='arrow-right'/>
                </Button>
                <div className="bubble-bg"/>
            </Card>
            </div>
        </Container>
    );
}

export default Bubble;

