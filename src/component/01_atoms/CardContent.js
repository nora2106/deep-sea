import styled from 'styled-components';

const Container = styled('div')`
  background-color: white;
  height: 55%;
  width: 100%;
  position: relative;
  z-index: 2;
  border-radius: 1em;

  
`;


const Name = styled('h2')`
  padding-top: 15px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 20px;
  
`;

const SubName = styled('h3')`
  margin-left: 10px;
  font-size: 13px;
  
    
`;

const Text = styled('p')`
  margin-left: 10px;

  
`;

function CardContent() {
    return (
        <Container>
                <Name>Giant Phantom Jelly</Name>
                <SubName>Stygiomedusa gigantea</SubName>
                <div className="icons">
                </div>
            <hr/>
            <Text>Text</Text>

        </Container>
    );
}

export default CardContent;

