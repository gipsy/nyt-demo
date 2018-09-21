import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux-bundler-react'
import navHelper from 'internal-nav-helper'
import { Search, Wrapper } from './styled'

const SearchField = ({ doFetchNews, doUpdateUrl }) => {
  function handleSubmit(val) {
    doFetchNews(val, () => {
      navHelper(doUpdateUrl('/news'))
    })
  }

  return (
    <Wrapper>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={(val) => handleSubmit(val)}
      />
    </Wrapper>
  )
}

SearchField.propTypes = {
  doFetchNews: PropTypes.func.isRequired,
  doUpdateUrl: PropTypes.func.isRequired,
}

export default connect(
  'doFetchNews',
  'doUpdateUrl',
  SearchField,
)
