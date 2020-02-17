import React from 'react';
import styled from 'styled-components'

const BarBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;
const Bar = styled.input`
  border-radius: 20px;
  /* padding: 10px; */
  height: 50px;
  width: 200px;
  text-align: center;
  font-size: .9em;
  background-color: white;
  border: none;
`;

const SearchBar = ({searchChange}) => {
    return (
        <BarBox>
            <Bar 
                className='searchInput'
                type='search' 
                placeholder='Search a character by name' 
                onChange = {searchChange}
            />
        </BarBox>
    );
}

export default SearchBar;