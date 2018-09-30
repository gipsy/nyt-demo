import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { initialData } from '@tests/initial-data'

import NewsItem from '@components/news-item'

storiesOf('NewsItem', module)
  .add('with text', () => (
    <div style={{ padding: '20px' }}>
      <div className="ant-list-vertical ant-list-lg ant-list-split ant-list-something-after-last-item">
        <NewsItem item={ initialData.news.data[0] } />
      </div>
    </div>
  ))
