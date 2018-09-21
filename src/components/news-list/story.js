import React from 'react'
import { Provider } from 'redux-bundler-react'
import { storiesOf, addDecorator } from '@storybook/react'
import cache from '@common/utils/cache'
import getStore from '@bundles'

import NewsList from '@components/news-list'

let store
const render = () => {
  cache.getAll().then((initialData) => {
    if (initialData && process.env.NODE_ENV === 'development') {
      console.log('starting with locally cache data:', initialData)
    }
    store = getStore(initialData)
  })
}

render()

storiesOf('NewsList', module)
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <NewsList />)
