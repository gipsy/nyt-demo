import React from 'react'
import { mount } from 'enzyme'
import { store } from '@tests/store'

import NewsList from '@components/news-list'

describe('NewsList', () => {
  let wrap
  beforeEach(() => {
    wrap = mount(<NewsList />, { context: { store } })
  })

  afterEach(() => {
    wrap.unmount()
  })

  it('renders without crashing', () => {
    expect(wrap).toMatchSnapshot()
  })

  it('renders actual component', () => {
    expect(wrap.find(NewsList).exists()).toBeTruthy()
  })
})
