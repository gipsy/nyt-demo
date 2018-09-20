import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'redux-bundler-react'

import { Main } from '@components/main/styled'
import NYTimesLogo from '@components/nyt-logo'
import PreviewArticleDrawer from '@components/preview-article-drawer'

import 'antd/dist/antd.css'

const AppRoot = ({ route, previewArticleContent }) => {
  const Page = route

  return(
    <>
      <NYTimesLogo />
      <Main>
        <Page />
      </Main>
      <PreviewArticleDrawer />
    </>
  )
}

export default hot(module)(connect(
  'selectRoute',
  AppRoot
))
