import React from 'react'
import { mount } from 'enzyme'
import { store } from './config/store-mock'

import PreviewArticleDrawer from '@components/preview-article-drawer'

describe('PreviewArticleDrawer', () => {
  let wrap
  beforeEach(() => {
    wrap = mount(<PreviewArticleDrawer />, { context: { store } })
  })

  afterEach(() => {
    wrap.unmount()
  })

  it('renders without crashing', () => {
    expect(wrap).toMatchSnapshot()
  })

  it('renders actual component', () => {
    expect(wrap.find(PreviewArticleDrawer).exists()).toBeTruthy()
  })
})
