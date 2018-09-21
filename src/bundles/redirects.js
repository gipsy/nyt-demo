import { createSelector } from 'redux-bundler'

// this is appropriate place all application redirects should be resolved
export default {
  name: 'redirects',
  reactRedirects: createSelector('selectPathname', (pathname) => {
    // remove trailing slash
    if (pathname !== '/' && pathname.endsWith('/')) {
      return { actionCreator: 'doReplaceUrl', args: [pathname.slice(0, -1)] }
    }
  }),
}
