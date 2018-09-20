import { composeBundles, createCacheBundle } from 'redux-bundler'

import routes from '@bundles/routes'
import news from '@bundles/news'
import redirects from '@bundles/redirects'
import cache from '@common/utils/cache'
import extraArgs from '@bundles/extra-args'

export default composeBundles(
  routes,
  news,
  redirects,
  createCacheBundle(cache.set),
  extraArgs,
)
