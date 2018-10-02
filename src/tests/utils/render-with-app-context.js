import React from 'react'
import { render } from 'react-testing-library'
import { Provider } from 'redux-bundler-react'
import getStore from '@bundles'
import { initialData } from '@tests/initial-data'

const customRender = (node, ...options) => {
  const [ context ] = options
  return render(
    <Provider store={getStore(context || initialData)}>
      {node}
    </Provider>,
    ...options,
  )
}

// re-export everything
export * from 'react-testing-library'

// override render method
export {customRender as render}
