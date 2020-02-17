import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* max-width: 100vw; */
`;


const CardList = ({characters}) => {
    return (
      <Boxes>
        {
          characters.map((character, i) => {
            return (
              <Card 
                key = {characters[i].id}
                id = {characters[i].id}
                name = {characters[i].name}
                species = {characters[i].species}
                image = {characters[i].image}
                status = {characters[i].status}
              />
            )
          })
        }
      </Boxes>
    )
}
export default CardList