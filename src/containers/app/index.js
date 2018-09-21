import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { connect } from 'redux-bundler-react'

import { Main } from '@components/main/styled'
import NYTimesLogo from '@components/nyt-logo'
import PreviewArticleDrawer from '@components/preview-article-drawer'

import 'antd/dist/antd.css'

const AppRoot = ({ route }) => {
  const Page = route

  return (
    <>
      <NYTimesLogo />
      <Main>
        <Page />
      </Main>
      <PreviewArticleDrawer />
    </>
  )
}

AppRoot.propTypes = {
  route: PropTypes.func.isRequired,
}

export default hot(module)(
  connect(
    'selectRoute',
    AppRoot,
  ),
)
