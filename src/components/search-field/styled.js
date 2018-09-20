import styled from 'styled-components'
import { 
  Icon as AntIcon,
  Button as AntButton,
  Input as AntInput,
} from 'antd'

const Icon = styled(AntIcon)`
  display: block;
`
const Button = styled(AntButton)`
  display: block;
`

const Input = styled(AntInput)`
  display: block;
`

const Search = styled(AntInput.Search)`
  display: block;
`

const CenterWrapper = styled.div`
  margin: 0 auto;
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export {
  Icon,
  Button,
  Input,
  Search,
  CenterWrapper,
}
