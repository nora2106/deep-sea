import styled from 'styled-components';

const Container = styled('div')`
  z-index: 1;
  .wave-dark {
    background-image:  url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTc0LjQ3MDY0IDQ2LjM0NTk0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojMDMwQzE1IiBkPSJtIDAsMTEuMzg0NDggYyAwLDAgMjEuMTMzODUxLDExLjM5NTMxIDQzLjYxNzY2MSwxMS4zODQ0MSBDIDY2LjEwMTQ3MSwyMi43NTc5OSAxMDcuOTY4NTYsMC4wMzI2MgogICAgMTMwLjUwOCw3ZS01IGMgMjIuNTM5NDQsLTAuMDMyNSA0My45NjI2NCwxMS4zODQ0MSA0My45NjI2NCwxMS4zODQ0MSBWIDQ2LjM0NTk0IEggMCBaIiAvPgo8L3N2Zz4=");
    top: 55em;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      top: 60em;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    }
  }

  .wave-footer {
    bottom: 65px;
  }
  
  .wave-light {
    background-image:  url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTc0LjQ3MDY0IDQ2LjM0NTk0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojOWFlN2U4IiBkPSJtIDAsMTEuMzg0NDggYyAwLDAgMjEuMTMzODUxLDExLjM5NTMxIDQzLjYxNzY2MSwxMS4zODQ0MSBDIDY2LjEwMTQ3MSwyMi43NTc5OSAxMDcuOTY4NTYsMC4wMzI2MgogICAgMTMwLjUwOCw3ZS01IGMgMjIuNTM5NDQsLTAuMDMyNSA0My45NjI2NCwxMS4zODQ0MSA0My45NjI2NCwxMS4zODQ0MSBWIDQ2LjM0NTk0IEggMCBaIiAvPgo8L3N2Zz4=");
    top: 6em;
    z-index: 1;
  }
`;

const WaveAnim = styled('div')`
  background-image:  url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTc0LjQ3MDY0IDQ2LjM0NTk0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDojMEQxRDI5IiBkPSJtIDAsMTEuMzg0NDggYyAwLDAgMjEuMTMzODUxLDExLjM5NTMxIDQzLjYxNzY2MSwxMS4zODQ0MSBDIDY2LjEwMTQ3MSwyMi43NTc5OSAxMDcuOTY4NTYsMC4wMzI2MgogICAgMTMwLjUwOCw3ZS01IGMgMjIuNTM5NDQsLTAuMDMyNSA0My45NjI2NCwxMS4zODQ0MSA0My45NjI2NCwxMS4zODQ0MSBWIDQ2LjM0NTk0IEggMCBaIiAvPgo8L3N2Zz4=");
  background-size: 500px auto;
  background-position-y: bottom;
  position: absolute;
  width: 100vw;
  height: 200px;
  z-index: 1;
  background-repeat: repeat-x;
  animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, swell 8s ease -1.25s infinite;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    transform: scaleX(2);
  }
  @keyframes wave {
    0% {
      background-position-x: -500px;
    }
    100% {
      background-position-x: 0;
    }
  }
  @keyframes swell {
    0%, 100% {
      background-position-y: 50%;
    }

    50% {
      background-position-y: bottom;
    }
  }

`;

function Wave(props) {
    return (
        <Container className='wave'>
            <WaveAnim className={props.class}/>
        </Container>
    );
}

export default Wave;

