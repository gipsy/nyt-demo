import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'redux-bundler-react'

import { Main } from '@components/main/styled'
import NYTimesLogo from '@components/nyt-logo'

import 'antd/dist/antd.css'

const AppRoot = ({ route }) => {
  const Page = route

  return (
    <>
      <NYTimesLogo />
      <Main>
        <Page />
      </Main>
    </>
  )
}

export default hot(module)(connect(
  'selectRoute',
  AppRoot
))
