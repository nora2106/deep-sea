import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faOctopusDeploy } from '@fortawesome/free-brands-svg-icons';
import { faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faEmpire } from '@fortawesome/free-brands-svg-icons';
library.add(faOctopusDeploy, faPhoenixFramework, faEmpire);

const Container = styled('div')`
  margin: 0 auto;
  
  .label-text {
    font-size: clamp(6px, 1.5vw, 12px);
    text-align: left;
    line-height: 8px;
  }
  
  .info-text {
    font-size: clamp(10px, 1.5vw, 16px);
    font-weight: 500;
    text-align: center;
    line-height: 8px;
  }
`;

function InfoLabel(props) {

    return (
        <Container>
            <p className="label-text">{props.text}</p>
            <p className="info-text">{props.label}</p>
        </Container>
    );
}

export default InfoLabel;

