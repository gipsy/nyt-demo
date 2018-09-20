import React from 'react'
import styled from 'styled-components'
import SearchField from '@components/search-field'

const Heading = styled.h2`
  font-family: 'Noto Serif KR', sans-serif;
  color: #000;
  text-align: center;
  width: 100%;
`

export default () => (
  <>
    <Heading>What news are you looking for ?</Heading>
    <SearchField />
  </>
)
