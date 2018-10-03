import React from 'react'
import { render } from '@tests/utils/render-with-app-context'

import NYTimesLogo from '@components/nyt-logo'

describe('<NYTimesLogo />', () => {
  const { container } = render(<NYTimesLogo />)

  test('should match snapshot', () => {
    expect(container).toMatchSnapshot()
  })
})
