import { createRouteBundle } from 'redux-bundler'
import HomePage from '@screens/home'
import NewsPage from '@screens/news'

export default createRouteBundle({
  '/': HomePage,
  '/news': NewsPage,
})
