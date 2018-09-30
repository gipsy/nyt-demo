import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { initialData } from '@tests/initial-data'

import NewsItem from '@components/news-item'

storiesOf('NewsItem', module)
  .add('with text', () => (
    <NewsItem item={ initialData.news.data[0] } />
  ))
