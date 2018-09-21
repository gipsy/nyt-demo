import { createSelector } from 'redux-bundler'

export default {
  name: 'news',
  getReducer: () => {
    const initialState = {
      loading: false,
      drawer: false,
      lastError: null,
      lastFetch: null,
      // page: null,
      query: null,
      meta: null,
      data: null,
      article: null,
    }

    return (state = initialState, { type, payload }) => {
      if (type === 'FETCH_NEWS_START') {
        return Object.assign({}, state, {
          loading: true,
          query: payload,
        })
      }

      if (type === 'FETCH_NEWS_ERROR') {
        return Object.assign({}, state, {
          lastError: Date.now(),
          loading: false,
        })
      }

      if (type === 'FETCH_NEWS_SUCCESS') {
        return Object.assign({}, state, {
          lastFetch: Date.now(),
          loading: false,
          lastError: null,
          data: payload.response.docs,
          meta: payload.response.meta,
        })
      }

      if (type === 'OPEN_PREVIEW_ARTICLE_DRAWER') {
        return Object.assign({}, state, {
          drawer: true,
          article: payload,
        })
      }

      if (type === 'CLOSE_PREVIEW_ARTICLE_DRAWER') {
        return Object.assign({}, state, {
          drawer: false,
          // article: null
        })
      }

      return state
    }
  },

  doFetchNews: (query, callback, page = 0) => ({ dispatch, apiNYT }) => {
    dispatch({ type: 'FETCH_NEWS_START', payload: query })
    apiNYT('/', query, page)
      .then((payload) => {
        dispatch({
          type: 'FETCH_NEWS_SUCCESS',
          payload,
        })
        callback && callback()
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_NEWS_ERROR', err })
      })
  },

  doPreviewArticle: (e, id) => ({ dispatch, getState }) => {
    e.preventDefault()
    dispatch({
      type: 'OPEN_PREVIEW_ARTICLE_DRAWER',
      payload: getState().news.data.find((article) => article._id === id),
    })
  },

  doCloseDrawer: () => ({ dispatch }) => {
    dispatch({ type: 'CLOSE_PREVIEW_ARTICLE_DRAWER' })
  },

  // selector for the whole contents of the reducer
  // including metadata about fetches
  selectNewsRaw: (state) => state.news,

  // selector for just the actual data if we have it
  selectNews: (state) => state.news.data,

  selectMeta: (state) => state.news.meta,

  selectQuery: (state) => state.news.query,

  // selectPage: (state) => state.news.page,

  selectLoading: (state) => state.news.loading,

  selectDrawer: (state) => state.news.drawer,

  selectPreviewArticleContent: (state) => state.news.article,

  // we'll extract a status string here, for display, just to show
  // the type of information available about the data
  selectNewsFetchStatus: createSelector('selectNewsRaw', (news) => {
    const { data, lastError, lastFetch, loading } = news

    let result = ''

    if (data) {
      result += 'Has data'
    } else {
      result += 'Does not have data'
    }

    if (loading) {
      return result + ' and is fetching currently'
    }

    if (lastError) {
      return (
        result +
        ` but had an error at ${lastError} and will retry after ~30 seconds`
      )
    }

    if (lastFetch) {
      return (
        result +
        ` that was fetched at ${lastFetch} but will be updated a minute later`
      )
    }
  }),

  reactShouldFetchNews: createSelector(
    // this is the selector we defined above, note that we can
    // just reference it by it's string name, but we could have
    // also assigned the function to a variable and passed that
    // function directly here instead.
    'selectNewsRaw',
    // this is one of the selectors that is made available by
    // one of the included bundles called 'appTime' this bundle
    // timestamps all actions and we also run an "app idle"
    // dispatch every 30 seconds if there have been no actions
    // dispatched and using requestAnimationFrame, this will
    // only happen if the tab is visible.
    // All this to say, we have a self-updating timestamp in our
    // redux state that we can use to see how long it's been.
    'selectAppTime',
    (news, appTime) => {
      // never trigger another fetch if we're already fetching
      if (news.loading) {
        return null
      }

      // for readability in this example I'm going to break out
      // and comment on the various conditions here. In reality
      // you'd likely want to write an abstraction that lets you describe
      // all this at a higher level. One such, abstraction is
      // included in the "/bundles" dir of the redux-bundler repo
      let shouldFetch = false

      // if we don't have data at all we definitely want to fetch
      if (!news.data) {
        shouldFetch = true
      }

      // was there an error last time we tried to fetch?
      // if it's been 15 seconds, give it another go...
      else if (news.lastError) {
        const timePassed = appTime - news.lastError
        if (timePassed > 15000) {
          shouldFetch = true
        }
      }

      // maybe our data is just stale?
      // I've made this arbitrarily short at just 1 minute
      // so you can see it working.
      // Note that we don't wipe out existing data if we have
      // it.
      else if (news.lastFetch) {
        const timePassed = appTime - news.lastfetch
        if (timePassed > 60000) {
          shouldFetch = true
        }
      }

      // here we can either return an actual action object to dispatch
      // by using `{type: 'SOME_ACTION'}` or we can just specify the
      // name of the action creator function we want to run, and optionally
      // any args we want to pass to it.
      if (shouldFetch) {
        return { actionCreator: 'doFetchNews' }
      }
    },
  ),
  persistActions: ['FETCH_NEWS_SUCCESS'],
}
