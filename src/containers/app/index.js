import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
import { hot } from 'react-hot-loader'
import { connect } from 'redux-bundler-react'
import { ThemeProvider } from 'styled-components'

import 'antd/dist/antd.css'


const HomePage = asyncComponent({
  resolve: () => import('@screens/home')
})

const NewsListPage = asyncComponent({
  resolve: () => import('@screens/news-list')
})

const NewsDetailPage = asyncComponent({
  resolve: () => import('@screens/news-detail')
})

const AppRoot = () => {
  return (
    <ThemeProvider theme={{ primaryColor: '#00A854' }}>
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/news-list" component={NewsListPage} />
            <Route path="/news-detail" component={NewsDetailPage} />
            <Redirect from='*' to='/' />
          </Switch>
        </>
      </Router>
    </ThemeProvider>
  )
}

export default hot(module)(AppRoot)
