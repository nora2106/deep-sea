import styled from 'styled-components';
import CustomSelect from "react-select";
import React from "react";

const Container = styled('div')`

  
`;



function SortSelect(props) {
   const [value, setValue] = React.useState('');

    function HandelChange (obj) {
        // props.parentCallback(event.target.style.value);
        // event.preventDefault();
        console.log(obj);
    }

    return (
        <Container>
         <CustomSelect options={props.options} name="select1" onChange={(option) => HandelChange(option)} />
        </Container>
    );
}
//onChange={(value) => setValue(value)}

export default SortSelect;

