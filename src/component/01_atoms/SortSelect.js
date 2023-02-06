import styled from 'styled-components';
import CustomSelect from "react-select";
import React from "react";

const Container = styled('div')`

  
`;



function SortSelect(props) {

    function handleChange (obj, name) {
        props.parentCallback(obj.value, name.name);
        // console.log(name.name)
    }

    return (
        <Container>
         <CustomSelect options={props.options} name={props.name} onChange={(option, name) => handleChange(option, name)} />
        </Container>
    );
}
//onChange={(value) => setValue(value)}

export default SortSelect;

