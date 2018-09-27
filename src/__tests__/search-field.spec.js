import React from 'react'
import { mount } from 'enzyme'
import { store } from './store-mock'

import SearchField from '@components/search-field'

describe('SearchField', () => {
  it('renders without crashing', () => {
    const wrap = mount(<SearchField />, { context: { store } })
    expect(wrap).toMatchSnapshot()
    expect(
      wrap.find('button').text()
    ).toEqual('Search')
    wrap.unmount()
  })
})
