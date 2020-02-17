import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  color: white;
`;
const TitleText = styled.h1`
  font-size: 2.5em;
`;

export default function Header() {
  return (
    <Title>
      <TitleText>
        Rick and Morty Characters
      </TitleText>
    </Title>
  )
}
