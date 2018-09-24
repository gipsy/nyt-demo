import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './mock'
import NewsItem from '@components/news-item'

describe('NewsItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewsItem item={store.data[0]} />, div)
    expect(div.innerHTML).not.toBe(null)
    ReactDOM.unmountComponentAtNode(div)
  })
})
