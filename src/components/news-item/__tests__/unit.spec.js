import React from 'react'
import { initialData } from '@tests/initial-data'
import renderer from 'react-test-renderer'

import NewsItem from '@components/news-item'

describe('NewsItem', () => {
  test('it renders without crashing', () => {
    const tree = renderer.create(<NewsItem item={ initialData.news.data[0] } />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
