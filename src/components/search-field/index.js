import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux-bundler-react'
import navHelper from 'internal-nav-helper'
import { Icon, Button, Input, Search, CenterWrapper } from './styled'

const SearchField = ({ doFetchNews, doUpdateUrl }) => {
  function handleSubmit(val) {
    doFetchNews(val, () => {
      navHelper(doUpdateUrl('/news'))
    })
  }

  return (
    <CenterWrapper>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={(val) => handleSubmit(val)}
      />
    </CenterWrapper>
  )
}

export default connect(
  'doFetchNews',
  'doUpdateUrl',
  SearchField,
)
