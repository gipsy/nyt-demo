import React from 'react'
import { mount } from 'enzyme'
import { initialData } from './config/initial-data'

import NewsItem from '@components/news-item'

describe('NewsItem', () => {
  it('renders without crashing', () => {
    const wrap = mount(<NewsItem item={initialData.news.data[0]} />)
    expect(wrap).toMatchSnapshot()
    wrap.unmount()
  })
})
