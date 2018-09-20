import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import IconText from '@components/icon-text'
import { Item, Meta, Avatar, Date, Source, Title } from './styled'

const NewsItem = ({
  item: { _id, snippet, multimedia, pub_date, source, web_url, headline, score },
  doPreviewArticle,
}) => {

  const thumb = multimedia.length > 0
    ? `https://graphics8.nytimes.com/${multimedia.find((item) => item.subType === 'thumbnail').url}`
    : 'https://www.randjsc.com/wp-content/uploads/2015/05/NYT-logo-square-150x150.jpg'

  return(
    <Item
      key={_id}
      extra={<img width={75} alt="logo" src={thumb} />}
    >
      <Source>{source}</Source>
      <Meta
        avatar={<Avatar src={thumb} />}
        title={
          <Title href={web_url} onClick={(e) => doPreviewArticle(e, _id)}>
            {headline.main}
          </Title>
        }
        description={snippet}
      />
      <Date>{Moment(pub_date).fromNow()}</Date>
    </Item>
  )
}

export default NewsItem
