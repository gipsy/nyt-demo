import styled from 'styled-components'
import {
  List,
  Avatar as AntAvatar,
} from 'antd'

const Item = styled(List.Item)`
  display: block;
`

const Avatar = styled(AntAvatar)`
  display: block;
`

const Meta = styled(List.Item.Meta)`
  display: block;
`

const Date = styled.time`
  font-family: 'Helvetica', sans-serif;
  color: #ccc;
  font-weight: 100;
  font-size: 12px;
`

const Source = styled.p`
  font-family: 'Libre Franklin', sans-serif;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  color: rgb(18, 18, 18);
  display: block;
`

export {
  Item,
  Avatar,
  Meta,
  Date,
  Source,
}
