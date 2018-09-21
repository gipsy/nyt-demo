import styled from 'styled-components'

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`

const Logo = styled.svg`
  width: 30%;
  margin: 0 auto;
  display: block;
`

export { Wrapper, Logo }
