import React from 'react'
import ReactDOM from 'react-dom'
import NewsList from '.'

it('renders item at DOM', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewsList id="news-list" />, div)

  const newsListEl = div.querySelector('#news-list')
  expect(newsListEl).not.toBe(null)

  ReactDOM.unmountComponentAtNode(div)
})
