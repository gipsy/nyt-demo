import React from 'react'
import { mount } from 'enzyme'
import { store } from './config/store-mock'

import NYTimesLogo from '@components/nyt-logo'

describe('NYTimesLogo', () => {
  let wrap
  beforeEach(() => {
    wrap = mount(<NYTimesLogo />, { context: { store } })
  })

  afterEach(() => {
    wrap.unmount()
  })

  it('renders without crashing', () => {
    expect(wrap).toMatchSnapshot()
  })

  it('renders actual component', () => {
    expect(wrap.find(NYTimesLogo).exists()).toBeTruthy()
  })
})
