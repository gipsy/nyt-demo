import React from 'react'
import { Reducer } from 'redux-testkit'
import { composeBundles } from 'redux-bundler'
import { initialData } from '@tests/initial-data'
import { payloadMock } from '@tests/payload-mock'
import news from '@bundles/news'
import extraArgs from '@bundles/extra-args'

const createStore = composeBundles(news, extraArgs)
const store = createStore(initialData)

describe('bundles/news', () => {

  it('should have initial state', () => {
    expect(store.getState().news).toEqual(initialData.news)
  })

  it('should select news data array', () => {
    expect(store.selectNews().length).toEqual(1)
  })

  it('should select news data "_id" value', () => {
    expect(store.selectNews()[0]._id).toEqual('5ba46d04068401528a2dc251')
  })

  it('should select news data "snippet" value', () => {
    expect(store.selectNews()[0].snippet).toEqual('In the hit movie “Crazy Rich Asians,” the country looks luxe. But it’s easy to have a great time (and eat memorably well) without spending much.')
  })

  it('should select news data "multimedia" key array value', () => {
    expect(store.selectNews()[0].multimedia.length).toEqual(1)
  })

  it('should select news data "pub_date" value', () => {
    expect(store.selectNews()[0].pub_date).toEqual('2018-09-21T04:01:06+0000')
  })

  it('should select news data "source" value', () => {
    expect(store.selectNews()[0].source).toEqual('The New York Times')
  })

  it('should select news data "web_url" value', () => {
    expect(store.selectNews()[0].web_url).toEqual('https://www.nytimes.com/2018/09/21/travel/singapore-travel-budget.html')
  })

  it('should select news data "headline.main" value', () => {
    expect(store.selectNews()[0].headline.main).toEqual('Singapore, for Those Who Aren’t Crazy Rich')
  })

  it('should select meta data "hits" value', () => {
    expect(store.selectMeta().hits).toEqual(36208)
  })

  it('should select query data value', () => {
    expect(store.selectQuery()).toEqual('singapore')
  })

  it('should select news fetch loading state', () => {
    expect(store.selectLoading()).toEqual(false)
  })

  it('should select drawer state', () => {
    expect(store.selectDrawer()).toEqual(false)
  })

  it('should select preview article content', () => {
    expect(store.selectPreviewArticleContent()._id).toEqual('5ba46d04068401528a2dc251')
  })

  it('should select preview article content "snippet" value', () => {
    expect(store.selectPreviewArticleContent().snippet).toEqual('In the hit movie “Crazy Rich Asians,” the country looks luxe. But it’s easy to have a great time (and eat memorably well) without spending much.')
  })

  it('should select preview article content "multimedia" key array value', () => {
    expect(store.selectPreviewArticleContent().multimedia.length).toEqual(1)
  })

  it('should select preview article content "pub_date" value', () => {
    expect(store.selectPreviewArticleContent().pub_date).toEqual('2018-09-21T04:01:06+0000')
  })

  it('should select preview article content "source" value', () => {
    expect(store.selectPreviewArticleContent().source).toEqual('The New York Times')
  })

  it('should select preview article content "web_url" value', () => {
    expect(store.selectPreviewArticleContent().web_url).toEqual('https://www.nytimes.com/2018/09/21/travel/singapore-travel-budget.html')
  })

  it('should select preview article content "headline.main" value', () => {
    expect(store.selectPreviewArticleContent().headline.main).toEqual('Singapore, for Those Who Aren’t Crazy Rich')
  })

  // it('should change drawer state to true', () => {
  //   const e = { preventDefault: jest.fn() }
  //   store.doPreviewArticle(e, '5ba46d04068401528a2dc251')
  //   expect(store.selectDrawer()).toEqual(true)
  // })

  it('should change drawer state to false', () => {
    store.doCloseDrawer()
    expect(store.selectDrawer()).toEqual(false)
  })

  it('should handle FETCH_NEWS_START action on initial state', () => {
    const action = { type: 'FETCH_NEWS_START' }

    const result = { 
      article: null, 
      data: null, 
      drawer: false,
      lastError: null, 
      lastFetch: null, 
      loading: true, 
      meta: null, 
      query: undefined 
    }

    Reducer(news.getReducer()).expect(action).toReturnState(result)
  })

  it('should handle FETCH_NEWS_START action on existing state', () => {
    const action = { type: 'FETCH_NEWS_START', payload: 'ukraine' }

    const state = { 
      loading: true,
      query: 'singapore'
    }

    const result = { 
      loading: true, 
      query: 'ukraine'
    }

    Reducer(news.getReducer()).withState(state).expect(action).toReturnState(result)
  })

  it('should handle FETCH_NEWS_ERROR action on initial state', () => {
    const action = { type: 'FETCH_NEWS_ERROR' }

    const result = { 
      article: null, 
      data: null, 
      drawer: false,
      lastError: Date.now(), 
      lastFetch: null, 
      loading: false, 
      meta: null, 
      query: null
    }

    Reducer(news.getReducer()).expect(action).toReturnState(result)
  })

  it('should handle FETCH_NEWS_ERROR action on existing state', () => {
    const action = { type: 'FETCH_NEWS_ERROR' }

    const state = { 
      lastError: null,
      loading: true
    }

    const result = { 
      lastError: Date.now(),
      loading: false
    }

    Reducer(news.getReducer()).withState(state).expect(action).toReturnState(result)
  })

  // it('should handle FETCH_NEWS_SUCCESS action on initial state', () => {
  //   const action = { type: 'FETCH_NEWS_SUCCESS', payload: payloadMock }
  //
  //   const result = { 
  //     article: null, 
  //     data: initialData.news, 
  //     drawer: false,
  //     lastError: null, 
  //     lastFetch: Date.now(), 
  //     loading: false, 
  //     meta: initialData.meta, 
  //     query: null
  //   }
  //
  //   Reducer(news.getReducer()).expect(action).toReturnState(result)
  // })

  // it('should handle FETCH_NEWS_SUCCESS action on existing state', () => {
  //   const action = { type: 'FETCH_NEWS_SUCCESS', payload: payloadMock }
  //
  //   const state = { 
  //     lastFetch: null,
  //     loading: false,
  //     lastError: null,
  //     data: null,
  //     meta: null
  //   }
  //
  //   const result = { 
  //     lastFetch: Date.now(),
  //     loading: false,
  //     lastError: null,
  //     data: payloadMock.response.data,
  //     meta: payloadMock.response.meta
  //   }
  //
  //   Reducer(news.getReducer()).withState(state).expect(action).toReturnState(result)
  // })
})
