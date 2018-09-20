import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import { connect } from 'redux-bundler-react'

import NewsItem from '@components/news-item'
import { List } from './styled'

const NewsList = ({
  news,
  query,
  doOpenModal,
  doUpdatePagination,
}) => {

  const events = {
    doOpenModal,
    doUpdatePagination,
  }

  // filter news to show only articles and reverse
  const articles = news.filter((item) => item.document_type === 'article').reverse()

  return(
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 10
      }}
      dataSource={articles}
      renderItem={(item) => (
        <NewsItem key={item._id} item={item} {...events} />
      )}
    />
  )
}

export default connect(
  'selectNews',
  'selectQuery',
  'doUpdatePagination',
  'doOpenModal',
  NewsList
)

