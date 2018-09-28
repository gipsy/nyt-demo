import React from 'react'
import { mount } from 'enzyme'
import { initialData } from './config/initial-data'

import NewsItem from '@components/news-item'

describe('NewsItem', () => {
  let wrap
  beforeEach(() => {
    wrap = mount(<NewsItem item={ initialData.news.data[0] } />)
  })

  afterEach(() => {
    wrap.unmount()
  })

  it('renders without crashing', () => {
    expect(wrap).toMatchSnapshot()
  })

  it('renders actual component', () => {
    expect(wrap.find(NewsItem).exists()).toBeTruthy()
  })
})
