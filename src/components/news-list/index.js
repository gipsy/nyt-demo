import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import { connect } from 'redux-bundler-react'

import NewsItem from '@components/news-item'
import { List } from './styled'

const NewsList = ({
  news,
  meta,
  query,
  loading,
  doPreviewArticle,
  doFetchNews
}) => {

  const events = {
    doPreviewArticle,
  }

  return(
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          doFetchNews(query, undefined, page - 1)
        },
        pageSize: 10,
        position: 'both',
        total: meta.hits,
        showTotal: (total) => `Total ${meta.hits} items`,
        defaultCurrent: 1,
        simple: window.innerWidth < 400 ? true : false
      }}
      loading={loading}
      dataSource={news}
      renderItem={(item) => (
        <NewsItem key={item._id} item={item} {...events} />
      )}
    />
  )
}

export default connect(
  'selectNews',
  'selectMeta',
  'selectQuery',
  'selectLoading',
  'doFetchNews',
  'doPreviewArticle',
  NewsList
)

