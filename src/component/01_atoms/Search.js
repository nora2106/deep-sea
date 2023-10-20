import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled('div')`
  border: 2px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  order: 2;  
  transition: opacity .5s;
  opacity: 70%;
  
  .icon {
    color: white;
    width: 1.8em;
    height: 1.8em;
    margin-left: 10px;
    cursor: none;

    @media(min-width: ${(props) => props.theme.breakpoints.m}){
      margin-right: 10px;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    flex-direction: row-reverse;
    height: 35px;
    border-radius: 12px;
    padding: 5px;
    width: 15vw;
    order: 3;
  }
  
  :hover {
   opacity: 100%;
  }
`;

const SearchInput = styled('input')`
  height: 46px;
  width: 85%;
  background-color: transparent;
  color: white;
  border: none;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    height: 100%;
  }
`;


function Search() {

    function search() {
        let val = document.getElementById('search').value;
        if(val !== null) {
            console.log(val)
            const  href  = window.location.origin;
            window.location.href = `${href}/search?q=${val}`;
        }
    }

    return (
        <Container>
                <FontAwesomeIcon onClick={search} icon="search" className="icon btn-hover"/>
            <SearchInput id='search' placeholder="Search Creatures" type="text"/>
        </Container>
    );
}

export default Search;

