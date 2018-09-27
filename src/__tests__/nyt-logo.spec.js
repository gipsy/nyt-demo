import React from 'react'
import { mount } from 'enzyme'
import { store } from './config/store-mock'

import NYTimesLogo from '@components/nyt-logo'

describe('NYTimesLogo', () => {
  it('renders without crashing', () => {
    const wrap = mount(<NYTimesLogo />, { context: { store } })
    expect(wrap.find(NYTimesLogo).exists()).toBeTruthy()
    expect(wrap).toMatchSnapshot()
    wrap.unmount()
  })
})
