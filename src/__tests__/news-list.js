import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow'
import { store } from './mock'
import NewsList from '@components/news-list'

describe('NewsList', () => {
  it('renders without crashing', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<NewsList />)
    const result = renderer.getRenderOutput()

    throw new Error(result)


    const div = document.createElement('div')
    ReactDOM.render(<NewsList />, div)
    expect(div.innerHTML).not.toBe(null)
    ReactDOM.unmountComponentAtNode(div)
  })
})
