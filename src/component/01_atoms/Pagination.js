import styled from 'styled-components';
import {useEffect, useState} from "react";

const Container = styled('div')`
  padding: 2em;
  display: flex;
  flex-direction: row;
`;

const Number = styled('div')`
  color: white;
  font-size: 1rem;
  margin: 1em;

  &.selected {
    font-weight: bold;
    pointer-events: none;
    text-decoration: underline;
  }
`;

function Pagination(props) {
    const [active, setActive] = useState(1);
    const handleClick = (num) => {
        props.action(num);
        setActive(num)
    }

    useEffect(() => {
        updatePage();
    }, [active])

    useEffect(() => {
        setActive(1)
    }, [props.reset])

    useEffect(() => {
        updatePage();
        console.log(props.pages)
    }, [props.pages]);

    function updatePage() {
        let categories = document.querySelectorAll('.page-number')
        categories.forEach(category => {
                category.classList.remove('selected')
                if (category.innerHTML === active.toString()) {
                    category.classList.add('selected')
                }
            }
        )
    }

    return (
        <Container>
            {Array.from({length: props.pages}, (_, index) =>
                <Number className='page-number btn-hover' onClick={() => handleClick(index + 1)}
                        key={index}>{index + 1}</Number>
            )}
        </Container>
    );
}

export default Pagination;

