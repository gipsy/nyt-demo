import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@tests/utils/render-with-app-context'
import { initialData } from '@tests/initial-data'

import PreviewArticleDrawer from '@components/preview-article-drawer'

describe('<PreviewArticleDrawer />', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  test('should match snapshot', () => {
    const context = {...initialData, news: { ...initialData.news, drawer: true }}
    const { container } = render(<PreviewArticleDrawer />, context)
    expect(container).toMatchSnapshot()
  })
})
