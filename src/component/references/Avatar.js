import styled from 'styled-components';

const Container = styled('div')`
    
`;

const AvatarBackground = styled('div')`
    position: relative;
    background: transparent;
    box-shadow: inset 8px 9px 7px rgba(0, 0, 0, 0.25),
    30px 40px 20px rgba(0, 0, 0, 0.25);
    transform: rotate(-5deg);
    z-index: 1;
    width: 55vw;
    height: 12em;
    outline: .8em solid #FF717E;
    border-radius: 1em;
    right: 10%;

    @media (min-width: 800px) {
        width: 10em;
        height: 13em;
    }
`;

const SquareBehind = styled('div')`
    position: absolute;
    background: #464D77;
    box-shadow: 10px 12px 12px rgba(0, 0, 0, 0.25);
    transform: rotate(5deg);
    z-index: -1;
    width: 60vw;
    height: 35vh;
    border-radius: 1em;
    left: 20%;
    top: -10%;

    @media (min-width: 800px) {
        width: 10em;
        height: 13em;
    }
`;

function Avatar() {
    return (
        <Container>
            <AvatarBackground/>
            <SquareBehind/>
        </Container>
    );
}

export default Avatar;

