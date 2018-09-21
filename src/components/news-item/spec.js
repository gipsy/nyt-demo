import React from 'react'
import ReactDOM from 'react-dom'
import NewsItem from '@components/news-item'

it('renders element at DOM', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewsItem id="news-item" />, div)

  const newsItemEl = div.querySelector('#news-item')
  expect(newsItemEl).not.toBe(null)

  ReactDOM.unmountComponentAtNode(div)
})
