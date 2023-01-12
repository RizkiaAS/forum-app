import PropTypes from 'prop-types'
import { useEffect } from 'react'
import StyledPostBody from '../styled/StyledPostBody'

function PostBodySection ({ title, article, isPlain = true }) {
  if (!isPlain) {
    useEffect(() => {
      document.getElementsByClassName('injected-article')[0].innerHTML = article
    }, [])

    return (
      <StyledPostBody className='post-body'>
        {title && <h1>{title}</h1>}
        <article className='injected-article'></article>
      </StyledPostBody>
    )
  }

  const formatedArticle = article.replace(/<[^>]*>/g, '')
  return (
    <StyledPostBody className='post-body'>
      {title && <h1>{title}</h1>}
      <article>
        <p>{formatedArticle}</p>
      </article>
    </StyledPostBody>
  )
}

PostBodySection.propTypes = {
  title: PropTypes.string,
  article: PropTypes.string,
  isPlain: PropTypes.bool
}

export default PostBodySection
