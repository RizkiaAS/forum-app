import PropTypes from 'prop-types'

function Hashtag ({ content, changeCategoryFun, isActive }) {
  const setBlue = isActive ? 'blue' : ''

  return <p className={`tag ${setBlue}`} onClick={() => changeCategoryFun(content)}>#{content}</p>
}

Hashtag.propTypes = {
  content: PropTypes.string.isRequired,
  changeCategoryFun: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Hashtag
