import styled from 'styled-components'
import { Input as AntInput } from 'antd'

const Search = styled(AntInput.Search)`
  display: block;
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export { Search, Wrapper }
