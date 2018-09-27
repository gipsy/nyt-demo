import React from 'react'
import { mount } from 'enzyme'
import { store } from './config/store-mock'

import NewsList from '@components/news-list'

describe('NewsList', () => {
  it('renders without crashing', () => {
    const wrap = mount(<NewsList />, { context: { store } })
    expect(wrap).toMatchSnapshot()
    wrap.unmount()
  })
})
