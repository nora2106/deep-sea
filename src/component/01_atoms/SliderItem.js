import styled from 'styled-components';


const Container = styled('div')`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: #F75B4B;
`;

function SliderItem(props) {
    return (
        <Container>
            <a href={props.link}>
                {/*<img src={props.src}/>*/}
            </a>
        </Container>
    );
}

export default SliderItem;

