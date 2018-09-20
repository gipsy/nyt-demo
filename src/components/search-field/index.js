import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux-bundler-react'
import { Icon, Button, Input, Search, CenterWrapper } from './styled'

const SearchField = ({
  doFetchNews,
  doUpdateUrl,
}) => {

  function handleSubmit(val) {
    doFetchNews(val, () => {
      doUpdateUrl('/news-list')
      // window.location.reload(true)
    })
  }

  return(
    <CenterWrapper>
      <Search
        placeholder="input search text"
        enterButton="Search"
        style={{ width: '50%' }}
        size="large"
        onSearch={(val) => handleSubmit(val)}
      />
    </CenterWrapper>
  )
}

export default connect(
  'doFetchNews',
  'doUpdateUrl',
  SearchField
)
