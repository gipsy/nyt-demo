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
  width: 50%;
`

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  resize: both;
  overflow: auto;
  margin: 0 auto;
  height: 100vh;
`

export {
  Icon,
  Button,
  Input,
  Search,
  CenterWrapper,
}
