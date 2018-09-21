import React from 'react'
import ReactDOM from 'react-dom'
import SearchField from '.'

it('renders item at DOM', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchField id="search-field" />, div)

  const searchFieldEl = div.querySelector('#search-field')
  expect(searchFieldEl).not.toBe(null)

  ReactDOM.unmountComponentAtNode(div)
})
