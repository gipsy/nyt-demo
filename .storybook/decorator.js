import React from 'react'
import { Provider } from 'redux-bundler-react'
import { addDecorator } from '@storybook/react'
import getStore from '@bundles'

const store = getStore(initialData)

/* Expose the store to the global scope (for debugging) */
window.parent.store = store
window.store = store

addDecorator(story => {
  return (
    <Provider store={store}>
      {story()}
    </Provider>
  )
})
