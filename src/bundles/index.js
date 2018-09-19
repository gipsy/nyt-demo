import { composeBundles, createCacheBundle } from 'redux-bundler'

import news from '@bundles/news'
import extraArgs from '@bundles/extra-args'
import redirects from '@bundles/redirects'
import cache from '@common/utils/cache'

export default composeBundles(
  news,
  createCacheBundle(cache.set),
  extraArgs,
  redirects,
)
