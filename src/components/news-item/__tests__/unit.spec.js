import React from 'react'
import { initialData } from '@tests/initial-data'
import { render } from 'react-testing-library'

import NewsItem from '@components/news-item'

describe('<NewsItem />', () => {
  const AVATAR_PATH = 'https://www.randjsc.com/wp-content/uploads/2015/05/NYT-logo-square-150x150.jpg'
  const { container, debug } = render(<NewsItem item={ initialData.news.data[0] } />)
  
  test('should match snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  test('should have proper avatar src path', () => {
    // expect(tree.find('img').filterWhere({ src: AVATAR_PATH })).to.have.lengthOf(1)
  })
})
