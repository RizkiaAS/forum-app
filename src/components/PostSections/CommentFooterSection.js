import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { asyncToggleDownVoteComment, asyncToggleUpVoteComment } from '../../states/thread/action'
import StyledPostFooter from '../styled/StyledPostFooter'

function CommentFooterSection ({
  upVotes,
  votedByMe,
  downVotes,
  downVotedByMe,
  commentId
}) {
  const dispatch = useDispatch()
  const { isLogin } = useSelector(state => state)

  const commentVoteFun = (fun, commentId) => dispatch(fun(commentId))

  return (
    <StyledPostFooter>
      <button onClick={() => {
        if (isLogin) {
          commentVoteFun(asyncToggleUpVoteComment, commentId)
        } else {
          alert('Anda harus login terlebih dahulu')
        }
      }}>
            <span className={`material-symbols-outlined ${votedByMe ? 'toggle-active' : ''}`}>arrow_upward</span>
            <p>{upVotes}</p>
        </button>

        <button onClick={() => {
          if (isLogin) {
            commentVoteFun(asyncToggleDownVoteComment, commentId)
          } else {
            alert('Anda harus login terlebih dahulu')
          }
        }}>
            <span className={`material-symbols-outlined ${downVotedByMe ? 'toggle-active' : ''}`}>arrow_downward</span>
            <p>{downVotes}</p>
        </button>
    </StyledPostFooter>
  )
}

CommentFooterSection.propTypes = {
  upVotes: PropTypes.number.isRequired,
  votedByMe: PropTypes.bool,
  downVotes: PropTypes.number.isRequired,
  downVotedByMe: PropTypes.bool,
  commentId: PropTypes.string
}

export default CommentFooterSection
