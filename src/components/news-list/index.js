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
  page,
  loading,
  doPreviewArticle,
  doFetchNews
}) => {

  const events = {
    doPreviewArticle,
  }

  console.log('meta.hits')
  console.log(meta.hits)
  console.log('query: ' + query)
  console.log('page: ' + page)
  console.log('loading: ' + loading)

  // filter news to show only articles and reverse
  // const articles = news.filter((item) => item.document_type === 'article').reverse()

  return(
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          doFetchNews(query, () => {
            console.log('fetch success')
          }, page - 1)
        },
        pageSize: 10,
        position: 'both',
        total: meta.hits,
        showTotal: (total) => `Total ${meta.hits} items`,
        defaultCurrent: 1
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
  'selectPage',
  'selectLoading',
  'doFetchNews',
  'doPreviewArticle',
  NewsList
)

