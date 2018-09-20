import { createSelector } from 'redux-bundler'

const publicUrls = ['/', '/news']

// this single app spot where all redirects may occur
export default {
  name: 'redirects',
  reactRedirects: createSelector(
    'selectPathname',
    (pathname) => {
      // remove trailing slash
      if (pathname !== '/' && pathname.endsWith('/')) {
        return { actionCreator: 'doReplaceUrl', args: [pathname.slice(0, -1)] }
      }
    }
  )
}
