import React from 'react'
import ReactDOM from 'react-dom'
import NYTimesLogo from '@components/nyt-logo'

it('renders element at DOM', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NYTimesLogo id="nyt-logo" />, div)

  const nyTimesLogoEl = div.querySelector('#nyt-logo')
  expect(nyTimesLogoEl).not.toBe(null)

  ReactDOM.unmountComponentAtNode(div)
})
