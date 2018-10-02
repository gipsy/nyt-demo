import React from 'react'
import { render } from '@tests/utils/render-with-app-context'

import SearchField from '@components/search-field'

describe('<SearchField />', () => {
  const { container } = render(<SearchField />)

  test('should match snapshot', () => {
    expect(container).toMatchSnapshot()
  })
})
