import styled from 'styled-components';
import CustomSelect from "react-select";
import React from "react";

const Container = styled('div')`
`;

function SortSelect(props) {

    function handleChange (obj, name) {
        props.parentCallback(obj.value, name.name);
    }

    React.useEffect(() => {

    })

    return (
        <Container className='hover-light'>
         <CustomSelect placeholder={props.default} options={props.options} name={props.name} onChange={(option, name) => handleChange(option, name)} />
        </Container>
    );
}
//onChange={(value) => setValue(value)}

export default SortSelect;

