import React from 'react';
import styled from 'styled-components'

const BarBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;
const Bar = styled.input`
  border-radius: 20px;
  padding: 10px;
  height: 50px;
  width: 200px;
  text-align: center
`;

const SearchBar = ({searchChange}) => {
    return (
        <BarBox>
            <Bar 
                className='searchInput'
                type='search' 
                placeholder='search a character' 
                onChange = {searchChange}
            />
        </BarBox>
    );
}

export default SearchBar;