import React from 'react'
import { connect } from 'redux-bundler-react'
import NewsList from '@components/news-list'

const NewsListPage = ({}) => (
  <>
    <h1>News List Page</h1>
    <NewsList/>
  </>
)

export default connect(
  NewsListPage
)
