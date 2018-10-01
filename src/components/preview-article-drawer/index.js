import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux-bundler-react'
import Moment from 'moment'
import { Drawer, Row, Col, Divider } from 'antd'

import { Headline, ArticleMedia, Snippet, Source, Date } from './styled'

const PreviewArticleDrawer = ({
  previewArticleContent,
  drawer,
  doCloseDrawer,
}) => {
  let headline, media, snippet, source, date

  if (previewArticleContent) {
    headline = previewArticleContent.headline.main || null
    media =
      previewArticleContent.multimedia.length > 0 &&
      previewArticleContent.multimedia.find(
        (media) => media.subtype === 'jumbo',
      ) !== undefined
        ? `https://graphics8.nytimes.com/${
            previewArticleContent.multimedia.find(
              (media) => media.subtype === 'jumbo',
            ).url
          }`
        : null
    snippet = previewArticleContent.snippet || null
    source = previewArticleContent.source || null
    date = previewArticleContent.pub_date || null
  }

  return (
    <Drawer
      width={window.innerWidth < 400 ? '100%' : '50%'}
      placement="right"
      closable={true}
      onClose={() => doCloseDrawer()}
      visible={drawer}>
      {previewArticleContent
      ? <>
          <Headline>{headline}</Headline>
          <Divider />
          <Source>{source}</Source>
          <Date>{Moment(date).format('ll')}</Date>
          {media && <ArticleMedia src={media} />}
          <Row>
            <Col span={24}>
              <Snippet>{snippet}</Snippet>
            </Col>
          </Row>
        </>
      : null}
    </Drawer>
  )
}

PreviewArticleDrawer.propTypes = {
  previewArticleContent: PropTypes.object,
  drawer: PropTypes.bool,
  doCloseDrawer: PropTypes.func.isRequired,
}

export default connect(
  'selectPreviewArticleContent',
  'selectDrawer',
  'doCloseDrawer',
  PreviewArticleDrawer,
)
