import React from 'react'
import { render, fireEvent } from '@tests/utils/render-with-app-context'
import Home from '@screens/home'

describe('<Home />', () => {
  test('should match snapshot', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

  // test('should change URL on submit button', () => {
  //   const { container } = render(<Home />)
  //   const submitButton = container.querySelector('.ant-input-search-button')
  //   const inputField = container.querySelector('.ant-input')
  //   fireEvent.change(inputField, {target: {value: 'singapore'}})
  //   fireEvent.click(submitButton)
  //   console.log(container)
  // })
})
