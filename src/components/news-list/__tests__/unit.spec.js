import React from 'react'
import renderer from 'react-test-renderer'
import getElementWithContext from 'react-test-context-provider'
import { store } from '@tests/store'

import NewsList from '@components/news-list'

describe('NewsList', () => {
  test('it renders without crashing', () => {
    const element = getElementWithContext({store}, <NewsList />)
    const component = renderer.create(element).toJSON()
    expect(component).toMatchSnapshot()
  })
})
