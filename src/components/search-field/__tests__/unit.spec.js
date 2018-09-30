import React from 'react'
import { mount } from 'enzyme'
import { store } from '@tests/store'

import SearchField from '@components/search-field'

describe('SearchField', () => {
  let wrap
  beforeEach(() => {
    wrap = mount(<SearchField />, { context: { store } })
  })

  afterEach(() => {
    wrap.unmount()
  })

  it('renders without crashing', () => {
    expect(wrap).toMatchSnapshot()
  })

  it('renders actual component', () => {
    expect(wrap.find(SearchField).exists()).toBeTruthy()
  })

  it('renders button with appropriate text', () => {
    expect(wrap.find('button').text()).toEqual('Search')
  })
})
