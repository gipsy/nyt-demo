import React from 'react'
import { mount } from 'enzyme'
import { store } from './config/store-mock'

import SearchField from '@components/search-field'

describe('SearchField', () => {
  it('renders without crashing', () => {
    const wrap = mount(<SearchField />, { context: { store } })
    expect(wrap.find(SearchField).exists()).toBeTruthy()
    expect(wrap.find('button').text()).toEqual('Search')
    expect(wrap).toMatchSnapshot()
    wrap.unmount()
  })
})
