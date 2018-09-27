import React from 'react'
import ReactDOM from 'react-dom'
import NYTimesLogo from '@components/nyt-logo'

describe('NYTimesLogo', () => {
  it('renders without craching', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NYTimesLogo />, div)
    expect(div.innerHTML).not.toBe(null)
    ReactDOM.unmountComponentAtNode(div)
  })
})
