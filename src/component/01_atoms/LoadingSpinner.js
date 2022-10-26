import styled from 'styled-components';

const Container = styled('div')`
  position: absolute;
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  left: 50%;
  margin-top: 3em;
  width: 2em;
  height: 2em;
  animation: spin 2s linear infinite;
  display: block;
  transition: opacity .2s;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function LoadingSpinner() {

    return (
        <Container id='spinner'>
        </Container>
    );
}

export default LoadingSpinner;

