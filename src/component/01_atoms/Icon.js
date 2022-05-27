import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled('div')`
  margin-bottom: -8px;
  
  
`;

const Image = styled('div')`
  background-color: ${(props) => props.theme.colors.primAccent};
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin-left: .8em;
  margin-right: .8em;
  margin-bottom: -8px;
  display: flex;
  
  .icon {
    width: 55%;
    height: 55%;
    padding: 10px;
  }

  :hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .tooltip {
    margin-left: 5px;
    visibility: hidden;
    width: auto;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 2px 8px;
    border-radius: 4px;
    position: absolute;
    z-index: 1;
    top: 18%;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 10px;
  }

  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

`;

const Text = styled('p')`
  font-size: 11px;
  text-align: center;
  line-height: 12px;
`;

function Icon(props) {
    return (
        <Container>
            <Image>
                <FontAwesomeIcon className="icon" icon={props.icon}/>
                <span className="tooltip">Text</span>
            </Image>
            <Text>{props.label}</Text>
        </Container>
    );
}

export default Icon;

