import React from 'react'
import renderer from 'react-test-renderer'
import getElementWithContext from 'react-test-context-provider'
import { store } from '@tests/store'

import SearchField from '@components/search-field'

describe('SearchField', () => {

  it('renders without crashing', () => {
    const el = getElementWithContext({ store }, <SearchField />)
    const component = renderer.create(el).toJSON()
    expect(component).toMatchSnapshot()
  })

  // it('renders actual component', () => {
  //   expect(wrap.find(SearchField).exists()).toBeTruthy()
  // })
  //
  // it('renders button with appropriate text', () => {
  //   expect(wrap.find('button').text()).toEqual('Search')
  // })
})
