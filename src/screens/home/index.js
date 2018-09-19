import React from 'react'
import styled from 'styled-components'
import SearchField from '@components/search-field'

const HomeWrapper = styled.div`
  background: linear-gradient(#181060 0, #5e47ff 100%);
`

const Heading = styled.h2`
  font-family: 'Noto Serif KR', sans-serif;
  color: #fff;
  text-align: center;
  padding-top: 30%;
  position: absolute;
  width: 100%;
`

export default () => (
  <HomeWrapper>
    <Heading>What news are you looking for ?</Heading>
    <SearchField />
  </HomeWrapper>
)
