import styled from 'styled-components'

const Headline = styled.h2`
  font-family: 'Noto Serif KR', sans-serif;
  font-size: 28px;
  color: #000;
`

const ArticleMedia = styled.img`
  display: inline-block;
  background-color: #ececec;
  width: 100%;
`

const Snippet = styled.p`
  font-size: 16px;
  color: #000;
  margin-top: 20px;
`

const Source = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  color: #ddd;
  display: inline-block;
`

const Date = styled.time`
  font-family: 'Helvetica', sans-serif;
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  float: right;
`

export { Headline, ArticleMedia, Snippet, Source, Date }
