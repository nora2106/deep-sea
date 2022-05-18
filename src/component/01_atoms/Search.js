import styled from 'styled-components';

const Container = styled('div')`
  border: 2px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: right;
  order: 2;  
  
  p {
    color: white;
    padding-left: 10px;
    line-height: 100%;

  }

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    flex-direction: row-reverse;
    height: 40px;
    border-radius: 12px;
    padding: 5px;
    width: 250px;
    order: 3;
  }
`;

const SearchInput = styled('input')`
  height: 46px;
  width: 80%;
  background-color: transparent;
  color: white;
  border: none;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    height: 100%;
  }
`;


function Search() {
    return (
        <Container>
            <p>Icon</p>
            <SearchInput placeholder="Search" type="text"/>
        </Container>
    );
}

export default Search;
