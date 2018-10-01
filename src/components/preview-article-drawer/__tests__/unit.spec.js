import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import getElementWithContext from 'react-test-context-provider'
import getStore from '@bundles'
import { initialData } from '@tests/initial-data'
// import { store } from '@tests/store'

import PreviewArticleDrawer from '@components/preview-article-drawer'

const activeDrawerContext = {...initialData, news: { ...initialData.news, drawer: true }}
const store = getStore(activeDrawerContext)
describe('PreviewArticleDrawer', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  test('renders without crashing', () => {
    const el = getElementWithContext({ store }, <PreviewArticleDrawer />)
    const component = renderer.create(el).toJSON()
    console.log(component)
    expect(component).toMatchSnapshot()
  })

  // it('renders actual component', () => {
  //   expect(wrap.find(PreviewArticleDrawer).exists()).toBeTruthy()
  // })
})
