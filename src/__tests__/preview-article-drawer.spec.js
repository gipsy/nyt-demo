import React from 'react'
import { mount } from 'enzyme'
import { store } from './store-mock'

import PreviewArticleDrawer from '@components/preview-article-drawer'

describe('PreviewArticleDrawer', () => {
  it('renders without crashing', () => {
    const wrap = mount(<PreviewArticleDrawer />, { context: { store } })
    expect(wrap).toMatchSnapshot()
    wrap.unmount()
  })
})
