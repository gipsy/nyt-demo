import React from 'react'
import ReactDOM from 'react-dom'
import PreviewArticleDrawer from '.'

it('renders item at DOM', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PreviewArticleDrawer id="preview-article-drawer" />, div)

  const previewArticleDrawerEl = div.querySelector('#preview-article-drawer')
  expect(previewArticleDrawerEl).not.toBe(null)

  ReactDOM.unmountComponentAtNode(div)
})
