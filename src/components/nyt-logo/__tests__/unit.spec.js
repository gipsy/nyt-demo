import React from 'react'
import renderer from 'react-test-renderer'
import getElementWithContext from 'react-test-context-provider'
import { store } from '@tests/store'

import NYTimesLogo from '@components/nyt-logo'

describe('NYTimesLogo', () => {
  test('renders without crashing', () => {
    const el = getElementWithContext({ store }, <NYTimesLogo />)
    const component = renderer.create(el).toJSON()
    expect(component).toMatchSnapshot()
  })

  // it('renders actual component', () => {
  //   expect(wrap.find(NYTimesLogo).exists()).toBeTruthy()
  // })
})
