import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 220px;
  color: palevioletred;
  box-shadow: white 0px 0px 0px 6px;
  background: white;
  border-radius: 15px;
`;
const Name = styled.h2`
  /* max-width: 80%; */
  /* padding-left: 10px; */
  padding: 5px;
`;
const Sub = styled.p`
  padding: 5px;
  /* padding-left: 20px; */

`;
const Image = styled.img`
  width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

const Card = ({id, name, species, image, status}) => {
  return (
    <Box>
      <Image src={image} alt=""/>
      <Name>{name}</Name>
      {/* {id} */}
      <Sub>Species: {species}</Sub>
      <Sub>Status: {status}</Sub>
    </Box>
  )
}
export default Card