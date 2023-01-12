import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { asyncToggleDownVoteThread, asyncToggleUpVoteThread } from '../../states/thread/action'
import { asyncToggleDownVoteAThread, asyncToggleUpVoteAThread } from '../../states/threads/action'
import StyledPostFooter from '../styled/StyledPostFooter'

function PostFooterSection ({
  totalComments,
  upVotes,
  votedByMe,
  downVotes,
  downVotedByMe,
  id,
  isListOfThread
}) {
  const dispatch = useDispatch()
  const voteFun = (fun, id) => dispatch(fun(id))
  const { isLogin } = useSelector(state => state)

  return (
    <StyledPostFooter>
      {totalComments &&
        <button>
          <span className="material-symbols-outlined">mode_comment</span>
          <p>{totalComments}</p>
        </button>}

        <button onClick={() => {
          if (isLogin) {
            isListOfThread
              ? voteFun(asyncToggleUpVoteAThread, id)
              : voteFun(asyncToggleUpVoteThread, id)
          } else {
            alert('Anda harus login terlebih dahulu')
          }
        }}>
            <span className={`material-symbols-outlined ${votedByMe ? 'toggle-active' : ''}`}>arrow_upward</span>
            <p>{upVotes}</p>
        </button>

        <button onClick={() => {
          if (isLogin) {
            isListOfThread
              ? voteFun(asyncToggleDownVoteAThread, id)
              : voteFun(asyncToggleDownVoteThread, id)
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

PostFooterSection.propTypes = {
  totalComments: PropTypes.number,
  upVotes: PropTypes.number.isRequired,
  votedByMe: PropTypes.bool,
  downVotes: PropTypes.number.isRequired,
  downVotedByMe: PropTypes.bool,
  id: PropTypes.string,
  isListOfThread: PropTypes.bool
}

export default PostFooterSection
