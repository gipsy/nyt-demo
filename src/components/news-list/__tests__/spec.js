import React from 'react'
import { render, fireEvent } from '@tests/utils/render-with-app-context'

import NewsList from '@components/news-list'

describe('<NewsList />', () => {
  const { container } = render(<NewsList />)

  test('should match snapshot', () => {
    expect(container).toMatchSnapshot()
  })
})
