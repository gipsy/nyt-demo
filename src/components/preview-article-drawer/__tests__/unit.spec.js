import React from 'react'
import renderer from 'react-test-renderer'
import getElementWithContext from 'react-test-context-provider'
import { store } from '@tests/store'

import PreviewArticleDrawer from '@components/preview-article-drawer'

describe('PreviewArticleDrawer', () => {
  test('renders without crashing', () => {
    const el = getElementWithContext({ store }, <PreviewArticleDrawer />)
    const component = renderer.create(el).toJSON()
  })

  // it('renders actual component', () => {
  //   expect(wrap.find(PreviewArticleDrawer).exists()).toBeTruthy()
  // })
})
