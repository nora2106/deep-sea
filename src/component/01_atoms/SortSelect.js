import styled from 'styled-components';
import React, {useEffect, useRef, useState} from "react";
import Select from "react-select";

const Container = styled('div')`
  margin-top: 1em;
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 1em 0 1em 0;
  }
  
  .custom-select__container {
    width: 18em;
    color: white;
    font-size: clamp(12px, 1.5vw, 18px);

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      width: 12em;
    }

    .custom-select__control {
      border: none;
      height: 4em;
      border-radius: 10px;

      &:hover {
        border: none;
        cursor: none;
      }

      @media (min-width: ${(props) => props.theme.breakpoints.m}) {
        height: 3em;
      }
    }

    .custom-select__single-value {
      color: ${(props) => props.theme.colors.textLight};
    }

    .custom-select__indicator {
      opacity: .8;
      transition: opacity .5s;
      color: ${(props) => props.theme.colors.textLight};

      svg {
        width: 25px;
        height: 25px;
      }
    }

    .custom-select__indicator:hover {
      color: ${(props) => props.theme.colors.textLight};
      opacity: 1;
    }

    .custom-select__indicator-separator {
      width: 2px;
      background-color: ${(props) => props.theme.colors.bgDarker};
    }

    .custom-select__placeholder {
      color: ${(props) => props.theme.colors.textLight};
    }

    .custom-select__menu {
      background-color: ${(props) => props.theme.colors.bgDark};
      border-radius: 10px;
    }

    .custom-select__option {
      color: ${(props) => props.theme.colors.textLight};
      padding-block: 12px;
      transition: background-color .5s;
      border-radius: 10px;
      
      &:hover {
        cursor: none;
      }
    }
  }
`;

function SortSelect(props) {
    const selectInputRef = useRef();

    useEffect(() => {
        // console.log(props.show)
        if(props.show !== true) {
            clearValue();
        }
    }, [props.show]);

    function clearValue() {
        selectInputRef.current.clearValue();
        let selectName = selectInputRef.current.props.name;
        // props.parentCallback(props.default, selectName)
    }

    function handleChange(e) {
        let selectName = selectInputRef.current.props.name;
        if(e != null) {
            props.parentCallback(e.value, selectName);
        }
    }

    return (
            <Container>
                <Select
                    ref={selectInputRef}
                    placeholder={props.default} name={props.name}
                    className='custom-select__container btn-hover' classNamePrefix='custom-select'
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: '#1F2B6DFF',
                            primary: '#020312',
                            primary50: '#1F2B6DFF',
                            neutral0: '#08132F',
                        },
                    })}
                    options={props.options}
                    onChange={handleChange}
                />
            </Container>
    );
}

export default SortSelect;

