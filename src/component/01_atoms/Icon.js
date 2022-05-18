import styled from 'styled-components';
// import Fish from '@material-ui/icons/Fastfood';
import {FaFish} from "react-icons/fa";

const Container = styled('div')`
  margin-bottom: -8px;

`;

const Image = styled('div')`
  background-color: ${(props) => props.theme.colors.primAccent};
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-left: .5em;
  margin-right: .5em;
  margin-bottom: -8px;
  
  .icon {
    width: 60%;
    height: 60%;
    padding: 10px;
  }

`;

const Text = styled('p')`
    font-size: 11px;
  text-align: center;
  line-height: 12px;
`;

function Icon() {
    return (
        <Container>
            <Image>
                <FaFish className="icon"/>
            </Image>
            <Text>Title</Text>
        </Container>
    );
}

export default Icon;

