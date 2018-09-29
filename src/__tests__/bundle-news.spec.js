import React from 'react'
import { composeBundles } from 'redux-bundler'
import { initialData } from './config/initial-data'
import news from '@bundles/news'
import extraArgs from '@bundles/extra-args'

const createStore = composeBundles(news, extraArgs)
const store = createStore(initialData)

describe('bundles/news', () => {

  it('should have initial state', () => {
    expect(store.getState().news).toEqual(initialData.news)
  })

  it('should get news data array', () => {
    expect(store.selectNews().length).toEqual(1)
  })

  it('should get news data "_id" value', () => {
    expect(store.selectNews()[0]._id).toEqual('5ba46d04068401528a2dc251')
  })

  it('should get news data "snippet" value', () => {
    expect(store.selectNews()[0].snippet).toEqual('In the hit movie “Crazy Rich Asians,” the country looks luxe. But it’s easy to have a great time (and eat memorably well) without spending much.')
  })

  it('should get news data "multimedia" key array value', () => {
    expect(store.selectNews()[0].multimedia.length).toEqual(1)
  })

  it('should get news data "pub_date" value', () => {
    expect(store.selectNews()[0].pub_date).toEqual('2018-09-21T04:01:06+0000')
  })

  it('should get news data "source" value', () => {
    expect(store.selectNews()[0].source).toEqual('The New York Times')
  })

  it('should get news data "web_url" value', () => {
    expect(store.selectNews()[0].web_url).toEqual('https://www.nytimes.com/2018/09/21/travel/singapore-travel-budget.html')
  })

  it('should get news data "headline.main" value', () => {
    expect(store.selectNews()[0].headline.main).toEqual('Singapore, for Those Who Aren’t Crazy Rich')
  })

  it('should get meta data "hits" value', () => {
    expect(store.selectMeta().hits).toEqual(36208)
  })

  it('should get query data value', () => {
    expect(store.selectQuery()).toEqual('singapore')
  })

  it('should get news fetch loading state', () => {
    expect(store.selectLoading()).toEqual(false)
  })

  it('should get drawer state', () => {
    expect(store.selectDrawer()).toEqual(false)
  })

  it('should get preview article content', () => {
    expect(store.selectPreviewArticleContent()._id).toEqual('5ba46d04068401528a2dc251')
  })

  it('should get preview article content "snippet" value', () => {
    expect(store.selectPreviewArticleContent().snippet).toEqual('In the hit movie “Crazy Rich Asians,” the country looks luxe. But it’s easy to have a great time (and eat memorably well) without spending much.')
  })

  it('should get preview article content "multimedia" key array value', () => {
    expect(store.selectPreviewArticleContent().multimedia.length).toEqual(1)
  })

  it('should get preview article content "pub_date" value', () => {
    expect(store.selectPreviewArticleContent().pub_date).toEqual('2018-09-21T04:01:06+0000')
  })

  it('should get preview article content "source" value', () => {
    expect(store.selectPreviewArticleContent().source).toEqual('The New York Times')
  })

  it('should get preview article content "web_url" value', () => {
    expect(store.selectPreviewArticleContent().web_url).toEqual('https://www.nytimes.com/2018/09/21/travel/singapore-travel-budget.html')
  })

  it('should get preview article content "headline.main" value', () => {
    expect(store.selectPreviewArticleContent().headline.main).toEqual('Singapore, for Those Who Aren’t Crazy Rich')
  })

  it('should change drawer state to true', () => {
    const e = { preventDefault: jest.fn() }
    store.doPreviewArticle(e, '5ba46d04068401528a2dc251')
    expect(store.selectDrawer()).toEqual(true)
  })

  it('should change drawer state to false', () => {
    store.doCloseDrawer()
    expect(store.selectDrawer()).toEqual(false)
  })
})
