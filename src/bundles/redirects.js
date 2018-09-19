import { createSelector } from 'redux-bundler'

const publicUrls = ['/', '/news-list']

export default {
  name: 'redirects',
  reactRedirects: createSelector(
    'selectPathname',
    (pathname) => {
      // if (hasNoOrgs && pathname === '/orgs') {
      //   return { actionCreator: 'doReplaceUrl', args: ['/orgs/create'] }
      // }

      // remove trailing slash
      if (pathname !== '/' && pathname.endsWith('/')) {
        return { actionCreator: 'doReplaceUrl', args: [pathname.slice(0, -1)] }
      }
    }
  )
}
